const express = require('express');
const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeConteroller');

const router = express.Router();

router.use(homeController);
router.use('/cube', cubeController);  //Respond to /cube/create route

module.exports = router;