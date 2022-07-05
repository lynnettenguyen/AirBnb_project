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

router.get('/:roomId/reviews', async (req, res, next) => {
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

    const room = await Room.findByPk(req.params.roomId)

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else {
        return res.json(roomReviews)
    }
})

router.post('/:roomId/reviews', checkReviewValidation, async (req, res, next) => {
    const { review, stars } = req.body;

    const room = await Room.findByPk(req.params.roomId)

    const userReviews = await Review.findAll({
        where: {
            userId: req.user.id,
            roomId: req.params.roomId
        },
    })

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else if (userReviews) {
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
            attributes: {
                include: [
                    [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating'],
                    [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews'],
                ],
                group: 'Review.roomId',
            },
        })

    // const reviewData = await Review.findAll({
    //     where: { roomId: req.params.roomId },
    //     attributes: [],
    //     include: [
    //         {
    //             model: Room,
    //             include: [
    //                 {
    //                     model: Image,
    //                     as: 'images',
    //                     attributes: ['url']
    //                 }, {
    //                     model: User,
    //                     as: 'Owner',
    //                     attributes: ['id', 'firstName', 'lastName']
    //                 }],
    //             attributes: {
    //                 include: [
    //                     [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating'],
    //                     [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews'],
    //                 ]
    //             }
    //         }
    //     ],
        // attributes: [
        //     [sequelize.fn('AVG', sequelize.col('stars')), 'avgStarRating'],
        //     [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews'],
        // ],
    //     group: 'Review.roomId'
    // })

    if (Number(req.params.roomId) !== rooms.id) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err);
    } else {
        return res.json(rooms)
        // // const roomData = rooms.toJSON()
        // return res.json(...reviewData)
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
