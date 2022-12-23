const cubeService = require('../services/cubeService');

exports.isCreator = async function (req, res, next) {
    let cube = await cubeService.getCubeById(req.params.id);
    
    if (cube.creator == req.user._id) {
        req.cube = cube;
        return next();
    }

    res.locals.error = 'You are not authorized!';
    res.render('404');
}