// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { requireAuth,
    checkRoomExists,
    checkNotOwner,
    checkNotOwnerReviews,
    checkOwnerRoom,
    checkUserReview,
    checkReviewValidation,
    checkReservationValidation,
    checkMaxImagesRooms,
    checkMaxImagesReviews } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const router = express.Router();

const validateDate = [
    check('startDate')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isDate()
        .withMessage('Valid start date is required'),
    check('endDate')
        .exists({ checkFalsy: true })
        .notEmpty()
        .isDate()
        .withMessage('Valid end date is required'),
    handleValidationErrors
]

const validateRoom = [
    check('address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Street address is required'),
    check('city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('City is required'),
    check('state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('State is required'),
    check('country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Country is required'),
    check('lat')
        .exists({ checkFalsy: true })
        .notEmpty()
        //     .custom(async function checkLat(lat) {
        //         if (lat > 90 || lat < -90 || typeof lat !== 'number') {
        //         if (lat > 90 || lat < -90 ) {
        //             throw Error
        //         }
        //     })
        .withMessage('Latitude is not valid'),
    check('lng')
        .exists({ checkFalsy: true })
        .notEmpty()
        //     .custom(async function checkLat(lng) {
        //         if (lng > 180 || lng < -180 || typeof lng !== 'number') {
        //         if (lng > 180 || lng < -180 ) {
        //             throw Error
        //         }
        //     })
        .withMessage('Longitude is not valid'),
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .custom(async function checkName(name) {
            if (name.length > 50) {
                throw Error
            }
        })
        .withMessage('Name must be less than 50 characters'),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Description is required'),
    check('price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Price per day is required'),
    handleValidationErrors
]

router.post('/:roomId/reviews/:reviewId/images', [requireAuth, checkUserReview, checkMaxImagesReviews], async (req, res) => {
    const { url } = req.body

    const newImage = await Image.create({
        userId: req.user.id,
        roomId: req.params.roomId,
        reviewId: req.params.reviewId,
        type: 'review',
        url: url
    })

    return res.json(newImage)
})

router.post('/:roomId/images', [requireAuth, checkOwnerRoom, checkMaxImagesRooms], async (req, res) => {
    const { url } = req.body

    const newImage = await Image.create({
        userId: req.user.id,
        roomId: req.params.roomId,
        type: 'room',
        url: url
    })

    return res.json(newImage)
})

router.get('/:roomId/reviews', checkRoomExists, async (req, res) => {
    const roomReviews = await Review.findAll({
        where: { roomId: req.params.roomId },
        include: [{
            model: User,
            attributes: ['id', 'firstName', 'lastName'],
        }, {
            model: Image,
            as: 'images',
            attributes: ['url']
        }]
    })
    return res.json({ 'Review': roomReviews })
})

router.post('/:roomId/reviews', [requireAuth, checkRoomExists, checkNotOwnerReviews, checkReviewValidation], async (req, res, next) => {
    const { review, stars } = req.body;

    const userReviews = await Review.findAll({
        where: {
            userId: req.user.id,
            roomId: req.params.roomId
        },
        raw: true
    })

    if (Object.keys(userReviews).length) {
        const err = new Error(`User already has a review for this spot`);
        err.status = 403;
        return next(err);
    } else {
        const newReview = await Review.create({
            userId: req.user.id,
            roomId: req.params.roomId,
            review: review,
            stars: stars
        })
        return res.json(newReview)
    }
})

router.get('/:roomId/reservations', [requireAuth, checkRoomExists], async (req, res) => {

    const allReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        // attributes: ['roomId', 'startDate', 'endDate']
    })

    const ownerReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        include: {
            model: User,
            attributes: ['id', 'firstName', 'lastName']
        }
    })

    const currentRoom = await Room.findByPk(req.params.roomId, {
        where: { ownerId: req.user.id },
        attributes: ['ownerId'],
    })

    if (currentRoom.ownerId === req.user.id) {
        return res.json({ 'reservations': ownerReservations })
    } else {
        return res.json({ 'reservations': allReservations })
    }
})

router.post('/:roomId/reservations', [requireAuth, checkRoomExists, checkNotOwner, validateDate, checkReservationValidation], async (req, res, next) => {
    const { startDate, endDate } = req.body;

    if (new Date(startDate).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' }) > new Date(endDate).toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })) {
        const err = new Error(`Invalid date selection`);
        err.status = 400;
        return next(err);
    } else if (startDate === endDate) {
        const err = new Error(`Reservations must be minimum of 1 day`);
        err.status = 400;
        return next(err);
    } else {
        const newReservation = await Reservation.create({
            userId: req.user.id,
            roomId: req.params.roomId,
            startDate: startDate,
            endDate: endDate,
        })
        return res.json(newReservation)
    }
})

router.put('/:roomId/reservations/:reservationId', [requireAuth, checkRoomExists, checkNotOwner, validateDate], async (req, res, next) => {
    const { startDate, endDate } = req.body;

    let errorResult = { errors: {} }

    const allReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        attributes: ['userId', 'startDate', 'endDate'],
        raw: true
    })

    let currStartDates = [];
    let currEndDates = [];
    let reservationUser = [];

    for (let i = 0; i < Object.keys(allReservations).length; i++) {
        currStartDates.push(allReservations[i].startDate)
        currEndDates.push(allReservations[i].endDate)
        reservationUser.push(allReservations[i].userId)
    }

    const currentReservation = await Reservation.findOne({
        where: {
            roomId: req.params.roomId,
            id: req.params.reservationId,
            userId: req.user.id
        }
    })

    if (!currentReservation) {
        const err = new Error(`Booking couldn't be found`);
        err.status = 404;
        return next(err);
    } else if (new Date(startDate) < new Date() || new Date(endDate) < new Date()) {
        const err = new Error(`Past bookings can't be modified`);
        err.status = 400;
        return next(err);
    } else if (new Date(startDate) > new Date(endDate)) {
        const err = new Error(`End date must be after start date`);
        err.status = 400;
        return next(err);
    } else {
        currentReservation.startDate = startDate;
        currentReservation.endDate = endDate;
    }

    for (let i = 0; i < currStartDates.length; i++) {
        let userReserved = reservationUser[i]
        let startRes = new Date(currStartDates[i]);
        let endRes = new Date(currEndDates[i]);

        let startReq = new Date(currentReservation.startDate)
        let endReq = new Date(currentReservation.endDate)

        if (userReserved !== req.user.id) {
            if ((startReq >= startRes && startReq < endRes) ||
                (endReq > startRes && endReq <= endRes) ||
                startRes >= startReq && startRes < endReq ||
                endRes > startReq && endRes <= endReq) {
                errorResult.errors.date = `Dates conflicts with an existing booking`
            } else if (startRes === startReq) {
                errorResult.errors.startDate = 'Start date conflicts with an existing booking'
            } else if (endRes === endReq) {
                errorResult.errors.endDate = 'End date conflicts with an existing booking'
            }
        }
    }

    if (Object.keys(errorResult.errors).length) {
        const err = new Error(`Sorry, this spot is already booked for the specified dates`);
        err.status = 403;
        err.errors = errorResult.errors
        return next(err)
    } else {
        currentReservation.save()
        return res.json(currentReservation)
    }
})

router.get('/:roomId', checkRoomExists, async (req, res) => {
    const rooms = await Room.unscoped().findByPk(req.params.roomId,
        {
            include: [
                {
                    model: Image,
                    as: 'images',
                    attributes: ['url']
                }, {
                    model: User,
                    as: 'Owner',
                    attributes: ['id', 'firstName', 'lastName']
                },
                {
                    model: Review,
                    // attributes: ['stars']
                }
            ],
        })

    const reviewAggregate = await Room.findByPk(req.params.roomId, {
        include: {
            model: Review,
            attributes: []
        },
        attributes: [
            [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating'],
            [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews'],
        ],
        raw: true
    })

    const roomData = rooms.toJSON()
    roomData.avgStarRating = reviewAggregate.avgStarRating
    roomData.numReviews = reviewAggregate.numReviews
    return res.json(roomData)
})

router.post('/', [requireAuth, validateRoom], async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price, category, type, bedrooms, beds, baths, guests } = req.body;

    const newRoom = await Room.create({
        ownerId: req.user.id,
        address: address,
        city: city,
        state: state,
        country: country,
        lat: lat,
        lng: lng,
        name: name,
        description: description,
        price: price,
        category: category,
        type: type,
        guests: guests,
        bedrooms: bedrooms,
        beds: beds,
        baths: baths
    })
    return res.json(newRoom);
})

router.put('/:roomId', [requireAuth, checkOwnerRoom, validateRoom], async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price, category, type, bedrooms, beds, baths, guests } = req.body;
    const room = await Room.findByPk(req.params.roomId);

    room.address = address;
    room.city = city;
    room.state = state;
    room.country = country;
    room.lat = lat;
    room.lng = lng;
    room.name = name;
    room.description = description;
    room.price = price;
    room.category = category;
    room.type = type;
    room.guests = guests;
    room.bedrooms = bedrooms;
    room.beds = beds;
    room.baths = baths;

    await room.save();
    return res.json(room);
})

router.delete('/:roomId', [requireAuth, checkOwnerRoom], async (req, res) => {
    const deleteRoom = await Room.findOne({
        where: {
            id: req.params.roomId,
            ownerId: req.user.id
        }
    })

    await deleteRoom.destroy();
    res.status = 200;
    return res.json({
        message: "Successfully deleted",
        statusCode: res.status
    })
})

router.get('/', async (req, res, next) => {
    const { minLat, maxLat, minLng, maxLng, minPrice, maxPrice, country } = req.query;

    const pagination = {}
    const results = {}
    const roomQuery = {};

    const errorResult = { errors: {} }

    page = req.query.page === undefined ? 0 : parseInt(req.query.page)
    size = req.query.size === undefined ? 25 : parseInt(req.query.size)

    if (!Number.isNaN(page) && !Number.isNaN(size)) {
        if (page < 0) {
            errorResult.errors.page = 'Page must be greater than or equal to 0'
        } else if (size < 0) {
            errorResult.errors.size = 'Size must be greater than or equal to 0'
        } else if (page <= 10 && size <= 25) {
            pagination.limit = size;
            pagination.offset = size * (page - 1)
        } else if (size > 25) {
            pagination.limit = 25;
            pagination.offset = 25 * (page - 1)
        } else if (page > 10) {
            pagination.limit = size;
            pagination.offset = size * (9)
        }
    }

    if (pagination.offset < 0) pagination.offset = 0;

    // console.log(minLat - Math.floor(minLat))
    if (minLat) {
        if ((minLat - Math.floor(minLat)) !== 0) roomQuery.lat = { [Op.gte]: minLat }
        else errorResult.errors.minLat = 'Minimum latitude is invalid'
    }

    if (maxLat) {
        if ((maxLat - Math.floor(maxLat)) !== 0) roomQuery.lat = { [Op.lte]: maxLat }
        else errorResult.errors.maxLat = 'Maximum latitude is invalid'
    }

    if (minLng) {
        if ((minLng - Math.floor(minLng)) !== 0) roomQuery.lng = { [Op.gte]: minLng }
        else errorResult.errors.minLng = 'Minimum longitude is invalid'
    }

    if (maxLng) {
        if ((maxLng - Math.floor(maxLng)) !== 0) roomQuery.lng = { [Op.lte]: maxLng }
        else errorResult.errors.maxLng = 'Maximum longitude is invalid'
    }

    if (minPrice) {
        if (minPrice > 0) roomQuery.price = { [Op.gte]: minPrice }
        else errorResult.errors.minPrice = 'Minimum price must be greater than 0'
        // if (minPrice.includes('.0')) roomQuery.price = { [Op.gte]: minPrice }
        // else if ((minPrice - Math.floor(minPrice)) !== 0) roomQuery.price = { [Op.gte]: minPrice }
        // else errorResult.errors.minPrice = 'Minimum price must be a decimal'
    }

    if (maxPrice) {
        if (maxPrice > 0) roomQuery.price = { [Op.lte]: maxPrice }
        else errorResult.errors.maxPrice = 'Maximum price must be greater than 0'
        // if (maxPrice.includes('.0')) roomQuery.price = { [Op.lte]: maxPrice }
        // else if ((maxPrice - Math.floor(maxPrice)) !== 0) roomQuery.price = { [Op.lte]: maxPrice }
        // else errorResult.errors.minPrice = 'Maximum price must be a decimal'
    }

    if (country && country !== "") {
        roomQuery.country = { [Op.substring]: country };
    }

    results.Rooms = await Room.unscoped().findAll({
        where: roomQuery,
        include: [
            {
                model: Image,
                as: 'images',
                attributes: ['url'],
                limit: 1
            },
            {
                model: Review,
                attributes: ['stars']
            }
        ],
        ...pagination,
    })

    results.page = page || 0;
    results.size = size || 25

    if (Object.keys(errorResult.errors).length) {
        const err = new Error('Validation Error');
        err.status = 400;
        err.errors = errorResult.errors
        return next(err)
    } else {
        return res.json(results)
    }
})

module.exports = router;
