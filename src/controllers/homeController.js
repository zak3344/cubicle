const router = require('express').Router();

const cubeService = require('../services/cubeService');
let isSearch = false;

router.get('/', async (req, res) => {
    isSearch = false;
    const cubes = await cubeService.getCubes();
    res.render('index', { isSearch, cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    res.render('index', {isSearch: true});
});

router.post('/search', async (req, res) => {
    isSearch = true;

    let { search, from, to } = req.body;
    [from, to] = [Number(from), Number(to)];

    const cubes = await cubeService.search(search, from, to);
    res.render('index', { isSearch, cubes });
});

module.exports = router;