// backend/routes/index.js
const express = require('express');
const router = express.Router();

// test route is setting a cookie on the res with name of XSRF-TOKEN and value of req.csrfToken method's return
// also sending "Hello World!" as the rse body
// router.get('/hello/world', function (req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
// });

// Add a XSRF-TOKEN cookie
// allows any developer to re-set the CSRF token cookie XSRF-TOKEN
// This route should not be available in production, but it will not be exclusive to the production application until you implement the frontend of the application later.So for now, it will remain available to both the development and production environments.

router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        'XSRF-Token': csrfToken
    });
});

// importing routes/api/index.js
const apiRouter = require('./api');
router.use('/api', apiRouter);

module.exports = router;
