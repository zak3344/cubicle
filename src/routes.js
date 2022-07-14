
const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeConteroller');
const accessoryController = require('./controllers/accessoryController');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);  //Respond to /cube/create route
router.use('/accessory', accessoryController); // Respond to /accessory/create
router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;