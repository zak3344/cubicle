const jwt = require('jsonwebtoken');
const { JWT_SECRET, TOKEN_COOKIE_NAME } = require('../config/config')[process.env.NODE_ENV];
const { promisify } = require('util');
const jwtVerify = promisify(jwt.verify);


exports.auth = async function (req, res, next) {
    let token = req.cookies[TOKEN_COOKIE_NAME];

    if (!token) return next();

    try {
        const decoded = await jwtVerify(token, JWT_SECRET);
        req.user = decoded;
        res.locals.isLogged = decoded;

        next();

    } catch (err) {
        console.log(err);
        next(err);
    }
}

exports.isAuth = function (req, res, next) {
    if (req.user) {
        return next();
    }
    res.status(401).end();
}


exports.isGuest = function (req, res, next) {
    if (!req.user) {
        return next();
    }
    res.redirect('/');
}

