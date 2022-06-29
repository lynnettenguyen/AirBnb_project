// backend/routes/api/index.js
const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const { setTokenCookie } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use(restoreUser);

// GET /api/restore-user
// will test the restoreUser middleware and check whether or not the req.user key has been populated by the middleware properly
router.get(
    '/restore-user',
    (req, res) => {
        // return res.json(req.user);
        console.log(req.user)
        res.send('ok')
    }
);

router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// GET /api/set-token-cookie
// test the setTokenCookie function by getting the demo user and calling setTokenCookie
router.get('/set-token-cookie', async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
});

// GET /api/require-auth
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);


module.exports = router;
