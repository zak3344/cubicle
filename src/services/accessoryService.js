const Accessory = require('../models/Accessory');

const getAccessories = () => Accessory.find({}).lean();

const getAccessoryById = (id) => Accessory.findById(id).lean();

const getAccessoriesByCubeId = (cubeId) => Accessory.find({})

const createAccessory = (data) => Accessory.create(data);

const updateAccessory = (id, data) => Accessory.findOneAndUpdate(id, data);

// NATIVE MONGO DB WAY
// const getAllWithout = (accessoryIds) => Accessory.find({_id: {$nin: accessoryIds}}).lean();

// MONGOOSE QUERIES WAY
const getAllWithout = (accessoryIds) => {
    return Accessory
        .find()
        .where('_id')
        .nin(accessoryIds)
        .lean();
}

module.exports = {
    getAccessories,
    getAccessoryById,
    createAccessory,
    updateAccessory,
    getAllWithout
}