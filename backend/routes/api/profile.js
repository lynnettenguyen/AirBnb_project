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

router.get('/', requireAuth, async (req, res) => {
    let currentUser = await User.findByPk(req.user.id)
    res.json(currentUser)
})

module.exports = router;
