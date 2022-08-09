const bcrypt = require('bcrypt');
const User = require('../models/User');
const { jwtSign, JWT_SECRET } = require('../utils/jwtUtils');

function register(username, password) {
    return bcrypt.hash(password, 10)
        .then(hash => User.create({ username, password: hash }));
}

function login(username, password) {
    return User.findUser(username)
        .then(user => {
            return Promise.all([bcrypt.compare(password, user.password), user]);
        })
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Cannot find username' }
            }
        })
}

function createToken(user) {

    let payload = {
        _id: user.get('_id'),
        username: user.get('username')
    };

    return jwtSign(payload);
}



module.exports = {
    register,
    login,
    createToken
}