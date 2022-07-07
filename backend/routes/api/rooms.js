// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { requireAuth,
    checkRoomExists,
    checkNotOwner,
    checkOwnerRoom,
    checkUserReview,
    checkReviewValidation,
    checkReservationValidation,
    checkMaxImagesRooms,
    checkMaxImagesReviews } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const { query } = require('express');
const e = require('express');
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

router.get('/:roomId/reviews', checkRoomExists, async (req, res, next) => {
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

router.post('/:roomId/reviews', [requireAuth, checkRoomExists, checkNotOwner, checkReviewValidation], async (req, res, next) => {
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

router.get('/:roomId/reservations', [requireAuth, checkRoomExists], async (req, res, next) => {

    const allReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        attributes: ['roomId', 'startDate', 'endDate']
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
        return res.json({ 'Bookings': ownerReservations })
    } else {
        return res.json({ 'Bookings': allReservations })
    }
})

router.post('/:roomId/reservations', [requireAuth, checkRoomExists, checkNotOwner, validateDate, checkReservationValidation], async (req, res) => {
    const { startDate, endDate } = req.body;

    if (new Date(startDate) > new Date(endDate)) {
        const err = new Error(`End date must be after start date`);
        err.status = 400;
        return next(err);
    }

    const newReservation = await Reservation.create({
        userId: req.user.id,
        roomId: req.params.roomId,
        startDate: startDate,
        endDate: endDate,
    })
    return res.json(newReservation)
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
        let startReserved = new Date(currStartDates[i]);
        let endReserved = new Date(currEndDates[i]);

        let startReq = new Date(currentReservation.startDate)
        let endReq = new Date(currentReservation.endDate)

        if (userReserved !== req.user.id) {
            if ((startReserved <= startReq && endReserved >= endReq) ||
                (startReserved <= startReq && endReserved >= startReq) ||
                (startReserved <= endReq && endReserved >= endReq)) {
                errorResult.errors.date = `Dates conflicts with an existing booking`
            } else if (startReserved === startReq) {
                errorResult.errors.startDate = 'Start date conflicts with an existing booking'
            } else if (endReserved === endReq) {
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

router.get('/:roomId', async (req, res, next) => {
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
                    attributes: []
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

    if (Number(req.params.roomId) !== rooms.id) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else {
        const roomData = rooms.toJSON()
        roomData.avgStarRating = reviewAggregate.avgStarRating
        roomData.numReviews = reviewAggregate.numReviews
        return res.json(roomData)
    }
})

router.post('/:roomId/reviews/:reviewId/images', [requireAuth, checkUserReview, checkMaxImagesReviews], async (req, res) => {
    const { url } = req.body

    const newImage = await Image.create({
        userId: req.user.id,
        roomId: req.params.roomId,
        reviewId: req.params.reviewId,
        type: 'review',
        url: url
    })

    res.json(newImage)
})


router.post('/:roomId/images', [requireAuth, checkOwnerRoom, checkMaxImagesRooms], async (req, res) => {
    const { url } = req.body

    const newImage = await Image.create({
        userId: req.user.id,
        roomId: req.params.roomId,
        type: 'room',
        url: url
    })

    res.json(newImage)
})

router.get('/', async (req, res, next) => {
    const { minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    const pagination = {}
    const results = {}
    const roomQuery = {};

    const errorResult = { errors: {} }

    page = req.query.page === undefined ? 0 : parseInt(req.query.page)
    size = req.query.size === undefined ? 20 : parseInt(req.query.size)

    console.log('PAGE', page)
    console.log('Size', size)

    if (!Number.isNaN(page) && !Number.isNaN(size)) {
        if (page < 0) {
            errorResult.errors.page = 'Page must be greater than or equal to 0'
        } else if (size < 0) {
            errorResult.errors.size = 'Size must be greater than or equal to 0'
        } else if (page <= 10 && size <= 20) {
            pagination.limit = size;
            pagination.offset = size * (page - 1)
        } else if (size > 20) {
            pagination.limit = 20;
            pagination.offset = 20 * (page - 1)
        } else if (page > 10) {
            pagination.limit = size;
            pagination.offset = size * (9)
        }
    }

    if (pagination.offset < 0) pagination.offset = 0;

    console.log(minLat - Math.floor(minLat))
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
        else errorResult.errors.minPrice = 'Maximum price must be greater than 0'
    }

    if (maxPrice) {
        if (maxPrice > 0) roomQuery.price = { [Op.lte]: maxPrice }
        else errorResult.errors.maxPrice = 'Minimum price must be greater than 0'
    }

    results.Spots = await Room.findAll({
        where: roomQuery,
        include: [
            {
                model: Image,
                as: 'previewImage',
                attributes: ['url'],
                limit: 1
            }
        ],
        ...pagination,
    })

    results.page = page || 0;
    results.size = size || 20

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
