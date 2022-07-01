// backend/routes/api/profile.js
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image } = require('../../db/models');
const router = express.Router();

router.get('/rooms', requireAuth, async (req, res) => {
    const myRooms = await Room.findAll({
        where: { ownerId: req.user.id }
    })
    // console.log('USER:', req.user)
    // console.log('USER ID:', req.user.id)
    res.json(myRooms)
})

module.exports = router;
