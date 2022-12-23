const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minlength: [5, 'Name should be at least 5 characters long!'],
        validate: [/^[a-zA-Z0-9\s]+$/i, 'Name should consist only english letters, spaces and numbers!']
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minlength: [20, 'Description should be at least 20 characters long!'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image URL is required!'],
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: `Image URL should start with "http://" or "https://"!`
        }
    },
    difficulty: {
        type: Number,
        required: true
    },
    accessories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Accessory'
        }
    ],
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

cubeSchema.statics.getByName = function (name) {
    return this.find({ name });
};

cubeSchema.query.filterBy = function () {

}

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;