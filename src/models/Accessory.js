const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: [true, 'Image Url is valid!'],
        validate: [/^https?:\/\//i, 'Invalid Image Url!']
    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 150
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;