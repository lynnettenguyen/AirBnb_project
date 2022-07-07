// backend/routes/api/profile.js
const { Op } = require('sequelize');
const express = require('express')
const { requireAuth, checkOwnerRoom, checkRoomValidation, checkUserReview } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


router.get('/rooms', requireAuth, async (req, res) => {
    const currentUser = await User.findAll({
        where: { id: req.user.id },
        attributes: [],
        include: [{
            model: Room,
            attributes: { exclude: ['numReviews', 'avgStarRating'] },
            include: {
                model: Image,
                as: 'previewImage',
                attributes: ['url']
            }
        }]
    })
    return res.json(currentUser)
})

router.post('/rooms', [requireAuth, checkRoomValidation], async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

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
        price: price
    })
    return res.json(newRoom)
})

router.put('/rooms/:roomId', [requireAuth, checkOwnerRoom, checkRoomValidation], async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const room = await Room.findByPk(req.params.roomId)

    room.address = address;
    room.city = city;
    room.state = state;
    room.country = country;
    room.lat = lat;
    room.lng = lng;
    room.name = name;
    room.description = description;
    room.price = price;

    await room.save();
    return res.json(room)
})

router.delete('/rooms/:roomId', [requireAuth, checkOwnerRoom], async (req, res, next) => {

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

router.get('/reviews', requireAuth, async (req, res) => {
    const userReviews = await Review.findAll({
        where: { userId: req.user.id },
        include: [
            {
                model: User,
                attributes: ['id', 'firstName', 'lastName']
            }, {
                model: Room,
                attributes: { exclude: ['description', 'createdAt', 'updatedAt', 'numReviews', 'avgStarRating'] }
            }, {
                model: Image,
                as: 'images',
                attributes: ['url']
            }
        ]
    })
    return res.json({ 'Reviews': userReviews })
})


router.get('/', requireAuth, async (req, res) => {
    const currentUser = await User.findByPk(req.user.id)
    return res.json(currentUser)
})

module.exports = router;
