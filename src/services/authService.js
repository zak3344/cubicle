const bcrypt = require('bcrypt');
const User = require('../models/User');

function register(username, password) {
    return bcrypt.hash(password, 10)
        .then(hash => User.create({ username, password: hash }));
}

module.exports = {
    register
}