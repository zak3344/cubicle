const Accessory = require('../models/Accessory');


const create = async (name, description, imageUrl) => {
    return Accessory.create({ name, description, imageUrl });
}

const getAll = async () => {
    return Accessory.find({}).lean();
}

const getAllWithout = async (accessoryIds) => {
    return Accessory.find({ _id: { $nin: accessoryIds } }).lean();
}

const accessoryService = {
    getAll,
    getAllWithout,
    create
}

module.exports = accessoryService;