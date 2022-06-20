const express = require('express');
const router = express.Router();
const cubeService = require('../services/cubeService');


const renderHome = (req, res) => {
    let cubes = cubeService.getAll();
    res.render('index', { cubes });
};

const about = (req, res) => {
    res.render('about');
}

const search = (req, res) => {
    let { search, from, to } = req.query;
    [from, to] = [Number(from), Number(to)];

    let cubes = cubeService.search(search, from, to);

    if(cubes.length == 0) {
        res.redirect('/');
    }

    res.render('index', {
        title: 'SEARCH',
        cubes
     });
}

router.get('/', renderHome);
router.get('/about', about);
router.get('/search', search)

module.exports = router;