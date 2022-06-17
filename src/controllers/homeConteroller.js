const express = require('express');
const router = express.Router();

const viewHome = (req, res) => {
    res.render('index');
};

router.get('/', viewHome);

module.exports = router;