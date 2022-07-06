// backend/routes/api/profile.js
const { Op } = require('sequelize');
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const checkRoomValidation = function (req, _res, next) {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    let errorResult = { errors: {} }

    if (!address) errorResult.errors.address = 'Street address is required';
    if (!city) errorResult.errors.city = 'City is required';
    if (!state) errorResult.errors.state = 'State is required';
    if (!country) errorResult.errors.country = 'Country is required';

    if (lat > 90 || lat < -90 || typeof lat !== 'number') errorResult.errors.lat = 'Latitude is not valid';
    if (lng > 180 || lng < -180 || typeof lng !== 'number') errorResult.errors.lng = 'Longitude is not valid';

    if (name.length > 50) errorResult.errors.name = 'Name must be less than 50 characters';

    if (!description) errorResult.errors.description = 'Description is required';
    if (!price) errorResult.errors.price = 'Price per day is required';

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

router.put('/rooms/:roomId', [requireAuth, checkRoomExists, checkRoomValidation], async (req, res, next) => {
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

router.delete('/rooms/:roomId', requireAuth, async (req, res, next) => {

    const deleteRoom = await Room.findOne({
        where: {
            id: req.params.roomId,
            ownerId: req.user.id
        }
    })

    if (!deleteRoom) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        return next(err)
    } else {
        await deleteRoom.destroy();
        res.status = 200;
        return res.json({
            message: "Successfully deleted",
            statusCode: res.status
        })
    }
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

router.get('/reservations', requireAuth, async (req, res) => {
    const reservations = await Reservation.findAll({
        where: { userId: req.user.id },
        include: [
            {
                model: Room,
                attributes: { exclude: ['numReviews', 'avgStarRating', 'createdAt', 'updatedAt'] },
                include: [
                    {
                        model: Image,
                        as: 'previewImage',
                        attributes: ['url']
                    }
                ]
            }
        ]
    })
    return res.json({ 'Bookings': reservations })
})

router.delete('/reservations/:reservationId', requireAuth, async (req, res, next) => {
    const deleteReservation = await Reservation.findOne({
        where: {
            id: req.params.reservationId,
            userId: req.user.id
        }
    })

    if (!deleteReservation) {
        const err = new Error(`Reservation couldn't be found`);
        err.status = 404;
        return next(err)
    } else {
        await deleteReservation.destroy();
        res.status = 200;
        return res.json({
            message: "Successfully deleted",
            statusCode: res.status
        })
    }
})


router.get('/', requireAuth, async (req, res) => {
    const currentUser = await User.findByPk(req.user.id)
    return res.json(currentUser)
})


module.exports = router;
