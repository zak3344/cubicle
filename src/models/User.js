const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be more than 3 characters!']
    },
    password: {
        type: String,
        required: true
    }
});

// userSchema.pre('save', function (next) {
//     bcrypt.hash(this.password, 9)
//         .then(hash => {
//             this.password = hash;

//             next();
//         });
// });
//  OTHER WAY TO HASH PASSWORD



let User = mongoose.model('User', userSchema);

module.exports = User;