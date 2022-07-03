// backend/routes/api/session.js
const express = require('express')
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const e = require('express');
const router = express.Router();

const validateLogin = [
    // route will expect the body of the request to have a key of credential with either the username or email of a user and a key of password with the password of the user
    // check('credential')
    check('email')
        .exists({ checkFalsy: true })
        .notEmpty()
        // .withMessage('Please provide a valid email or username.'),
        .withMessage('Email is required'),
    // checks to see whether or not req.body.credential and req.body.password are empty
    // if one is empty, response will return an error
    check('password')
        .exists({ checkFalsy: true })
        // .withMessage('Please provide a password.'),
        .withMessage('Password is required'),
    handleValidationErrors
];

// Log in
router.post(
    '/',
    validateLogin,
    async (req, res, next) => {
        // const { credential, password } = req.body;
        const { email, password } = req.body;

        // call the login static method from the User model
        // const user = await User.login({ credential, password });
        let user = await User.login({ email, password });

        if (!user) {
            const err = new Error('Invalid credentials');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid'];
            return next(err);
        }
        await setTokenCookie(res, user);
        const result = {}
        result.token = req.headers['xsrf-token'];
        user = user.toJSON()
        res.json(Object.assign(user, result))
        // return res.json({user});
    }
);

// Log out
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);

// Restore session user
// will return the session user as JSON under the key of user
// if there is no session, it will return a JSON with an empty object
// connect restoreUser middleware to get the session user
router.get(
    '/',
    restoreUser,
    (req, res) => {
        const { user } = req;
        if (user) {
            return res.json({
                user: user.toSafeObject()
            });
        } else return res.json({});
    }
);


module.exports = router;
