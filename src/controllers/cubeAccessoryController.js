const router = require('express').Router({ mergeParams: true });

const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');

router.get('/add', async (req, res) => {
    try {
        let cube = await cubeService.getOne(req.params.cubeId);
        let accessories = await accessoryService.getAll();

        res.render('cube/accessory/add', { cube, accessories });

    } catch (error) {
        console.log(error);
    }
});

router.post('/add', async (req, res) => {
    const cubeId = req.params.cubeId;

    try {
        await cubeService.attachAccessory(cubeId, req.body.accessory);
        res.redirect(`/cube/${cubeId }`);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;