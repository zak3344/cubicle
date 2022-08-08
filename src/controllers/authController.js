const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    let { username, password } = req.body;

    let auth = await authService.login(username, password);

    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    try {

        let { username, password, repeatPass } = req.body;

        await authService.register(username, password);

        res.redirect('/login');

    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;