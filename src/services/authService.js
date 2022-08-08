const bcrypt = require('bcrypt');
const User = require('../models/User');

function register(username, password) {
    return bcrypt.hash(password, 10)
        .then(hash => User.create({ username, password: hash }));
}

function login(username, password) {
    User.findUser(username)
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

module.exports = {
    register,
    login
}