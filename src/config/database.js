const mongoose = require('mongoose');

function initDatabase(connectionString) {
    mongoose.set('strictQuery', true)
    return mongoose.connect(connectionString);
}

module.exports = initDatabase;
