const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');


const renderHome = (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes });
};

router.get('/', renderHome);

module.exports = router;