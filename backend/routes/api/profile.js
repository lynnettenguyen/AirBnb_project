// backend/routes/api/profile.js
const express = require('express')
const { requireAuth, checkOwnerRoom, checkRoomValidation } = require('../../utils/auth');
const { User, Room, Review, Image, sequelize } = require('../../db/models');
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
    return res.json(currentUser);
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
    return res.json({ 'Reviews': userReviews });
})

router.get('/', requireAuth, async (req, res) => {
    const currentUser = await User.findByPk(req.user.id);
    return res.json(currentUser);
})

module.exports = router;
