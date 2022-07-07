// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { requireAuth, checkRoomExists, checkRoomValidation, checkNotOwner, checkOwnerRoom, checkUserReview, checkReviewValidation, checkReservationValidation, checkMaxImagesRooms } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const { check } = require('express-validator');
const router = express.Router();

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

router.post('/:roomId/reservations', [requireAuth, checkRoomExists, checkNotOwner, checkReservationValidation], async (req, res) => {
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

router.put('/:roomId/reservations/:reservationId', [requireAuth, checkRoomExists, checkNotOwner], async (req, res, next) => {
    const { startDate, endDate } = req.body;

    let errorResult = { errors: {} }

    const allReservations = await Reservation.findAll({
        where: { roomId: req.params.roomId },
        attributes: ['userId', 'startDate', 'endDate'],
        raw: true
    })

    let currStartDates = []
    let currEndDates = []
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

router.post('/:roomId/images', [requireAuth, checkOwnerRoom, checkMaxImagesRooms], async (req, res) => {
    const { url } = req.body

    const newImage = await Image.create({
        roomId: req.params.roomId,
        type: 'room',
        url: url
    })

    res.json(newImage)
})

router.get('/', async (req, res) => {
    const allRooms = await Room.findAll({
        include: [
            {
                model: Image,
                as: 'previewImage',
                attributes: ['url']
            }
        ]
    })
    return res.json({ "Rooms": allRooms })
})

module.exports = router;
