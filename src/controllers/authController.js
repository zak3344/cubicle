const router = require('express').Router();
const authService = require('../services/authService');

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    console.log(req.body);
    
    res.redirect('/');
});

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', (req, res) => {
    let {username, password, repeatPass } = req.body;

    authService.register(username, password);
});

module.exports = router;