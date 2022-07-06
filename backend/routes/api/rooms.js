// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image, sequelize } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const checkReviewValidation = function (req, _res, next) {
    const { review, stars } = req.body;
    let errorResult = { errors: {} }

    if (!review) errorResult.errors.review = 'Review text is required'
    if (stars < 1 || stars > 5) errorResult.errors.star = 'Stars must be an integer from 1 to 5'

    if (Object.keys(errorResult.errors).length) {
        const err = new Error('Validation Error');
        err.status = 400;
        err.errors = errorResult.errors
        return next(err)
    } else {
        return next()
    }
}

const checkRoomExists = async function (req, _res, next) {
    const room = await Room.findByPk(req.params.roomId)

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else {
        return next()
    }
}

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

router.post('/:roomId/reviews', [requireAuth, checkRoomExists, checkReviewValidation], async (req, res, next) => {
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

router.put('/:roomId/reviews/:reviewId', [requireAuth, checkReviewValidation], async (req, res, next) => {
    const { review, stars } = req.body;

    const updateReview = await Review.findOne({
        where: {
            id: req.params.reviewId,
            roomId: req.params.roomId
        }
    })

    if (!updateReview) {
        const err = new Error(`Review couldn't be found`)
        err.status = 404;
        return next(err)
    } else {
        updateReview.review = review;
        updateReview.stars = stars;
        await updateReview.save();
        return res.json(updateReview)
    }
})

router.delete('/:roomId/reviews/:reviewId', [requireAuth, checkReviewValidation], async (req, res, next) => {
    const deleteReview = await Review.findOne({
        where: {
            id: req.params.reviewId,
            roomId: req.params.roomId
        }
    })

    if (!deleteReview) {
        const err = new Error(`Review couldn't be found`);
        err.status = 404;
        return next(err)
    } else {
        deleteReview.destroy();
        res.status = 200;
        return res.json({
            message: "Successfully deleted",
            statusCode: res.status
        })
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
        where: {ownerId: req.user.id},
        attributes: ['ownerId'],
    })

    if (currentRoom.ownerId === req.user.id) {
        return res.json({'Bookings': ownerReservations})
    } else {
        return res.json({'Bookings': allReservations})
    }
})

router.post('/:roomId/reservations', [requireAuth, checkRoomExists], async (req, res, next) => {
    const { startDate, endDate } = req.body;

    const checkStartDate = await Reservation.findOne({
        where: { startDate: startDate }
    })

    const checkEndDate = await Reservation.findOne({
        where: { endDate: endDate }
    })

    let errorResult = { errors: {} }


    if (checkStartDate) errorResult.errors.startDate = 'Start date conflicts with an existing booking'
    if (checkEndDate) errorResult.errors.endDate = 'End date conflicts with an existing booking'


    if (Object.keys(errorResult.errors).length) {
        const err = new Error(`Sorry, this spot is already booked for the specified dates`);
        err.status = 403;
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
