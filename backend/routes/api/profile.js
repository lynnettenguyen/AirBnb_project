// backend/routes/api/profile.js
const express = require('express')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Room, Review, Reservation, Image } = require('../../db/models');
const router = express.Router();

router.delete('/rooms/:roomId', requireAuth, async (req, res, next) => {

    const room = await Room.findOne({
        where: {
            id: req.params.roomId,
            ownerId: req.user.id
        }
    })

    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        next(err)
    } else {
        await room.destroy();
        res.status = 200;
        res.json({
            message: "Successfully deleted",
            statusCode: res.status
        })
    }
})

router.put('/rooms/:roomId', requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    let errorResult = { errors: {} }

    const room = await Room.findByPk(req.params.roomId)

    if (!address) errorResult.errors.address = 'Street address is required';
    if (!city) errorResult.errors.city = 'City is required';
    if (!state) errorResult.errors.state = 'State is required';
    if (!country) errorResult.errors.country = 'Country is required';

    if (lat > 90 || lat < -90 || typeof lat !== 'number') errorResult.errors.lat = 'Latitude is not valid';

    if (lng > 180 || lng < -180 || typeof lng !== 'number') errorResult.errors.lng = 'Longitude is not valid';

    if (name.length > 50) errorResult.errors.name = 'Name must be less than 50 characters';

    if (!description) errorResult.errors.description = 'Description is required';
    if (!price) errorResult.errors.price = 'Price per day is required';


    if (!room) {
        const err = new Error(`Spot couldn't be found`);
        err.status = 404;
        next(err)
    }
    if (errorResult.errors) {
        const err = new Error('Validation Error');
        err.status = 400;
        err.errors = errorResult.errors
        next(err)
    }

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
    res.json(room)

})

router.post('/rooms', requireAuth, async (req, res, next) => {
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

    if (errorResult.errors) {
        const err = new Error('Validation Error');
        err.status = 400;
        err.errors = errorResult.errors
        next(err)
    }

    res.json(newRoom)
})

router.get('/rooms', requireAuth, async (req, res) => {
    const currentUser = await User.findAll({
        where: { id: req.user.id },
        attributes: [],
        include: {
            model: Room,
            as: 'Spots',
            attributes: { exclude: ['numReviews', 'avgStarRating'] }
        }
    })
    res.json(currentUser)
})

router.get('/reviews', requireAuth, async (req, res) => {
    const userReviews = await Review.findAll({
        where: { userId: req.user.id },
        include: [{
            model: User,
            attributes: ['id', 'firstName', 'lastName']
        }, {
            model: Room,
            as: 'Spots',
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        }, {
            model: Image,
            attributes: ['url']
        }]
    })
    res.json(userReviews)
})

router.get('/', requireAuth, async (req, res) => {
    let currentUser = await User.findByPk(req.user.id)
    res.json(currentUser)
})

module.exports = router;
