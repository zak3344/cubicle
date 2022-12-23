const User = require('../models/User');
const { jwtSign } = require('../utils/jwt');
const { JWT_SECRET } = require('../config/config')[process.env.NODE_ENV];

// exports.register = async function (username, password, repeatPassword) {
//     return bcrypt.hash(password, 10)
//         .then(hash => User.create({username, password: hash}));
// }

exports.register = function (username, password, repeatPassword) {
    if (password != repeatPassword) throw { message: 'Passwords doesn`t match!' }

    User.getByUsername(username)
        .then(user => {
            if (!user) {
                return User.create({ username, password });
            } else {
                throw { message: 'This username is already exist!' }
            }

        })
        .catch((err) => {
            throw err;
        });
}

exports.login = function (username, password) {
    return User.getByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isSame, user]) => {
            if (isSame) {
                return user;
            } else {
                throw { message: 'Cannot find username or password!' }
            }
        });
}

exports.createToken = function (user) {

    let payload = {
        _id: user._id,
        username: user.username
    }

    return jwtSign(payload, JWT_SECRET);
}







