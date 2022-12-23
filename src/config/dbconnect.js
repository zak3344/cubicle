const mongoose = require('mongoose');

exports.dbConnect = function(connectionString) {
    return mongoose.connect(connectionString);    
}
