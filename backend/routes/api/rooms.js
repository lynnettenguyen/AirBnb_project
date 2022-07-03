// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image, sequelize } = require('../../db/models');
const room = require('../../db/models/room');
const router = express.Router();


router.get('/:roomId', async (req, res) => {
    const rooms = await Room.findAll({
        where: { id: req.params.roomId },
        include: [
            {
                model: Image,
                as: 'previewImage',
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
                [sequelize.fn('AVG', sequelize.col('star')), 'avgStarRating'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'numReviews']
            ]
        }
    })

    res.json(rooms)
})

router.get('/', async (req, res) => {
    const allRooms = await Room.findAll({
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'latitude', 'longitude', 'name', 'description', 'price', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Image,
                as: 'previewImage',
                attributes: ['url']
            }
        ]
    })
    res.json(allRooms)
})

module.exports = router;
