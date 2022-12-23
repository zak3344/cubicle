const router = require('express').Router();

const accessoryService = require('../services/accessoryService');
const { errorParser } = require('../utils/errorParser');
const { isAuth } = require('../middlewares/authMiddleware');

// ADD ACCESSORY
router.get('/create',
    isAuth,
    async (req, res) => {
        res.render('createAccessory');
    });

router.post('/create',
    isAuth,
    async (req, res) => {
        const { name, description, imageUrl } = req.body;

        try {
            await accessoryService.createAccessory({ name, description, imageUrl });
            res.redirect('/');

        } catch (error) {
            res.locals.error = errorParser(error);
            res.render('createAccessory');
        }
    });

module.exports = router;