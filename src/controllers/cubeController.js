const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService');
const cubeAccessoryController = require('../controllers/cubeAccessoryController');
const { isAuth } = require('../middlewares/authMiddleware');
const { isCreator } = require('../middlewares/cubeAuthMiddleware');
const { errorParser } = require('../utils/errorParser');

router.get('/create',
    isAuth,
    (req, res) => {
        res.render('create');
    }
);

router.post('/create',
    isAuth,
    async (req, res) => {
        const { name, description, imageURL, difficultyLevel } = req.body;
        try {

            await cubeService.createCube(
                name,
                description,
                imageURL,
                Number(difficultyLevel),
                req.user._id
            );
            res.redirect('/');
        } catch (error) {
            res.locals.error = errorParser(error);
            res.render('create')
        }
    }
);

router.get('/:id',
    async (req, res) => {
        const cube = await cubeService.getCubeById(req.params.id);

        const isCreator = (cube.creator != undefined)
            && (req.user?._id == cube.creator);

        res.render('details', { cube, isCreator });
    });

router.get('/:id/edit',
    isAuth,
    isCreator,
    async (req, res) => {
        try {
            const cube = await cubeService.getCubeById(req.params.id);
            res.render('edit', cube);
        } catch (err) {
            console.log(err);
        }
    }
);

router.post('/:id/edit',
    isAuth,
    isCreator,
    (req, res) => {
        const id = req.params.id;
        const { name, description, imageUrl, difficultyLevel } = req.body;
        cubeService.editCube(id, { name, description, imageUrl, difficulty: difficultyLevel })
            .then(() => res.redirect(`/cube/${id}`));
    }
);

router.get('/:id/delete',
    isAuth,
    isCreator,
    async (req, res) => {
        const cube = await cubeService.getCubeById(req.params.id);
        res.render('delete', cube);
    }
);

router.post('/:id/delete',
    isAuth,
    isCreator,
    (req, res) => {
        cubeService.deleteCube(req.params.id)
            .then(() => {
                res.redirect('/')
            });
    }
);

// sub router handle accessory requests
router.use('/:id/accessory',
    isAuth,
    cubeAccessoryController
);

module.exports = router;