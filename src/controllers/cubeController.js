const express = require('express');

const cubeService = require('../services/cubeService');

const router = express.Router();

const renderCreatePage = (req, res) => {
    let cubes = cubeService.getAll();
    console.log(cubes);

    res.render('create');
};

const createCube = (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    cubeService.create(name, description, imageUrl, difficulty);

    res.redirect('/cube/create');
}

const cubeDetails = (req, res) => {
    let cube = cubeService.getOne(req.params.cubeId);
    res.render({ ...cube });
}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;