const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

const getAll = () => Cube.find({}).lean();

const getOne = (id) => Cube.findById(id).lean();

const getOneDetails = (id) => Cube.findById(id).populate('accessories').lean();

const create = (name, description, imageUrl, difficulty) => {
    return Cube.create({ name, description, imageUrl, difficulty });
};



const deleteById = (id) => Cube.findByIdAndDelete(id);


const search = async (text, from, to) => {
    let result = await getAll();

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }

    if (from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if (to) {
        result = result.filter(x => x.difficulty <= to);
    }

    if (!text && !from && !to) {
        result = '';
    }

    return result;
}

const attachAccessory = async (cubeId, accessoryId) => {
    let cube = await Cube.findById(cubeId);
    let accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    return cube.save();
}

const cubeService = {
    getAll,
    getOne,
    getOneDetails,
    create,
    attachAccessory,
    search,
    deleteById
}

module.exports = cubeService;