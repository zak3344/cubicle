const router = require('express').Router();
const cubeService = require('../services/cubeService');

const renderCreatePage = (req, res) => {
    res.render('create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');
    } catch (error) {
        res.status(400).send( error.message).end(0);
    }


}

const cubeDetails = (req, res) => {
    let cube = cubeService.getOne(req.params.cubeId);
    
    res.render('cube/details',{ ...cube });
}

router.get('/create', renderCreatePage);
router.post('/create', createCube);
router.get('/:cubeId', cubeDetails);

module.exports = router;