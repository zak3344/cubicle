const jwt = require('jsonwebtoken');
const { TOKEN_COOKIE_NAME, JWT_SECRET } = require('../constants');


exports.auth = function (req, res, next) {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) {
        return next();
    }

    // TODO: EXtract jwt.verify to jwt utils and make it promise function;

    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
        if (err) {
            return res.status(401).redirect('/login');
        }

        req.user = decodedToken;

        next();
    });
}

exports.isAuth = function (req, res, next) {
    if(!req.user) {
        return res.status(401).redirect('/login');
    }

    next();
}