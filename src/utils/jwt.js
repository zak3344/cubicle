const jwt = require('jsonwebtoken');

exports.jwtSign = function (payload, SECRET) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, SECRET, function (err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

