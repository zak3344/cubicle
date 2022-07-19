const Accessory = require('../models/Accessory');


const create = async(name, description, imageUrl) => {
    return Accessory.create({ name, description, imageUrl });
}

const getAll = async() => {
    return Accessory.find({}).lean();
}

const accessoryService = {
    getAll,
    create
}

module.exports = accessoryService;