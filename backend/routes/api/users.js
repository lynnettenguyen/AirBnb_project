// backend/routes/api/users.js
const express = require('express')

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// Sign up
router.post(
    '/',
    async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });
        // call the signup static method on the User model
        // if the user is successfully created, then call setTokenCookie and return a JSON response with the user information
        // if unsuccessful, then sequelize validation error will be passed onto error-handling middleware
        await setTokenCookie(res, user);

        return res.json({
            user
        });
    }
);

module.exports = router;
