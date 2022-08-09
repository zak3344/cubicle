const router = require('express').Router();
const jwt = require('jsonwebtoken');
const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('../controllers/cubeAccessoryController');
const { TOKEN_COOKIE_NAME, JWT_SECRET } = require('../constants');
const { isAuth } = require('../middlewares/authMiddleware');

const renderCreatePage = (req, res) => {
    res.render('cube/create');
};

const createCube = async (req, res) => {
    let { name, description, imageUrl, difficulty } = req.body;

    try {
        await cubeService.create(name, description, imageUrl, difficulty);
        res.redirect('/');
    } catch (error) {
        res.status(400).send(error.message).end(0);
    }
}

const cubeDetails = async (req, res) => {
    let cube = await cubeService.getOneDetails(req.params.cubeId);

    res.render('cube/details', { ...cube });
}


const renderDeletePage = async (req, res) => {

    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/delete', cube);
}

const renderEditPage = (req, res) => {
    let cube = await cubeService.getOne(req.params.cubeId);

    res.render('cube/edit', cube);
}

const deleteCube = async (req, res) => {
    await cubeService.deleteById(req.params.cubeId);

    res.redirect('/');
}

const editCube = (req, res) => {
    
}

router.get('/create', isAuth, renderCreatePage);
router.post('/create', isAuth, createCube);
router.get('/:cubeId', cubeDetails);
router.get('/:cubeId/delete', isAuth, renderDeletePage);
router.post('/:cubeId/delete', isAuth, deleteCube);
router.get('/:cubeId/edit', isAuth, renderEditPage);
router.post('/:cubeId/edit', isAuth, editCube);

router.use('/:cubeId/accessory', cubeAccessoryController);

module.exports = router;