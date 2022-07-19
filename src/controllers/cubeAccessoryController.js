const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService');

router.get('/add', async (req, res) => {
    try {
        let cube = await cubeService.getOne(req.params.cubeId);
        res.render('cube/accessory/add', { ...cube });

    } catch (error) {
        console.log(error);
    }

});

module.exports = router;