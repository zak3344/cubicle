const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [5, 'Name should be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9\s]+$/i, 'Name should consist only english letters, spaces and numbers!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [20,'Description should be at least 20 characters long!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: `Invalid image URL is invalid! Image URL should start with http/https!`
        }
    },
});

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;