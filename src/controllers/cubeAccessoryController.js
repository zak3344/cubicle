const router = require('express').Router({ mergeParams: true });
const cubeService = require('../services/cubeService');
const accessoryService = require('../services/accessoryService');



router.get('/add', async (req, res) => {
    let cube = await cubeService.getCubeById(req.params.id);
    let accessories = await accessoryService.getAllWithout(
        cube.accessories.map(x => x._id)
    );

    res.render('attachAccessory', { cube, accessories });
});

router.post('/add', async (req, res) => {
    const cubeId = req.params.id;
    const accessoryId = req.body.accessory;

    await cubeService.attachAccessory(cubeId, accessoryId);

    res.redirect(`/cube/${cubeId}`);
});

module.exports = router;