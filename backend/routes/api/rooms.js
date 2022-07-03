// backend/routes/api/rooms.js
const { Op } = require('sequelize');
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image } = require('../../db/models');
const room = require('../../db/models/room');
const router = express.Router();


router.get('/', async (req, res) => {
    const allRooms = await Room.findAll({
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'latitude', 'longitude', 'name', 'description', 'price', 'createdAt', 'updatedAt'],
        include: [{
            model: Image,
            as: 'previewImage',
            attributes: ['url']
        }]
    })

    res.json(allRooms)
})

module.exports = router;
