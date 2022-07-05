// backend/utils/validation.js
const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
// (to customize, see express-validator's documentation)
const handleValidationErrors = (req, _res, next) => {
    const validationErrors = validationResult(req);
    const { email, password } = req.body
    const errorResult = { errors: {} }

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors
            .array()
            .map((error) => `${error.msg}`);

        if (!email) errorResult.errors.email = 'Email is required';
        else if (!email.split("").includes('@')) errorResult.errors.email = 'Invalid email';
        if (!password) errorResult.errors.password = 'Password is required';

        const err = Error('Validation error');
        err.errors = errors;
        // err.errors = errorResult.errors;
        err.status = 400;
        err.title = 'Bad request.';
        next(err);
    }
    // if there are no validation error from validationRseult, invoke the next middleware
    next();
};

module.exports = {
    handleValidationErrors
};
