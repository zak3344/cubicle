const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username must be 3 or more characters long!'],
        unique: true,
        validate: [/^[a-zA-Z0-9]+$/i, 'Username should consist only english letters and numbers!']
    },
    password: {
        type: String,
        required: true,
        validate: [/^[a-zA-Z0-9]+$/i, 'Username shold consist only english letters and numbers!'],
        minlength: [6, 'Password should be at least 6 characters long!']
    }
});

userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 9)
        .then(hash => {
            this.password = hash;
            next();
        });
});

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
});


userSchema.statics.getByUsername = function (username) {
    return this.findOne({ username });
}

const User = mongoose.model('User', userSchema);
module.exports = User;

