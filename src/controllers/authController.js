const router = require('express').Router();

const { register, login, createToken } = require('../services/authService');
const { TOKEN_COOKIE_NAME } = require('../config/config')[process.env.NODE_ENV];
const { isGuest, isAuth } = require('../middlewares/authMiddleware');


router.get('/login',
    isGuest,
    (req, res) => {
        res.render('auth/login');
    }
);

router.post('/login',
    isGuest,
    async (req, res) => {
        const { username, password } = req.body;
        try {
            const user = await login(username, password);
            if (!user) {
                return res.redirect('/login');
            }

            let token = await createToken(user);

            res.cookie(TOKEN_COOKIE_NAME, token, {
                httpOnly: true
            });

            res.redirect('/');

        } catch (err) {
            throw err;
        }
    }
);


router.get('/register',
    isGuest,
    (req, res) => {
        res.render('auth/register');
    }
);


router.post('/register',
    isGuest,
    async (req, res, next) => {
        const { username, password, repeatPassword } = req.body;

        try {
            await register(username, password, repeatPassword);
            res.redirect('/login');
        } catch (err) {
            // res.status(400).render('auth/register', { error: err.message });
            next(err.message);
        }

    });

router.get('/logout',
    isAuth,
    (req, res) => {
        res.clearCookie(TOKEN_COOKIE_NAME);
        res.redirect('/')
    });

module.exports = router;