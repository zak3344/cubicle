const router = require('express').Router();
const accessoryService = require('../services/accessoryService');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => { 
    let {name, description, imageUrl} = req.body;

    try{
        console.log(imageUrl);
        await accessoryService.create(name, description, imageUrl);
        res.redirect('/');
    } catch(error) {
        res.status(400).send(error.messaga).end(0);
    }
    
});

module.exports = router;