const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', (req, res) => { 
    let {name, description, imageUrl} = req.body;

    res.redirect('/')
});

module.exports = router;