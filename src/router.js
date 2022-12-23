const router = require('express').Router();

const homeController = require('./controllers/homeController');
const cubeController = require('./controllers/cubeController');
const authController = require('./controllers/authController');
const aceessoryController = require('./controllers/accessoryController');

router.use(homeController);
router.use('/cube', cubeController);
router.use('/accessory', aceessoryController);
router.use(authController);

router.all('*', (req, res) => {
    res.status(404).render('404');
});

module.exports = router;