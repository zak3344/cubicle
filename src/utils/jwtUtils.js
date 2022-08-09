const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../constants');

exports.jwtSign = function (payload) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, JWT_SECRET, function (err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        })
    });

    return promise;
}


