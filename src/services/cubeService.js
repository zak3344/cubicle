const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');

const getCubes = () => Cube.find({}).lean();

const getCubeById = (id) => Cube.findById(id).populate('accessories').lean();

const createCube = (name, description, imageUrl, difficulty, userId) => {
    return Cube.create({ name, description, imageUrl, difficulty, creator: userId });
}

const editCube = (id, data) => Cube.findByIdAndUpdate(id, data, { runValidators: true });

const deleteCube = (id, data) => Cube.findByIdAndDelete(id)

const attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    cube.save();
} 

const search = async (search, from, to) => {
    let result = await getCubes();

    if (search) {
        result = result.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(c => c.difficulty >= from);
    }

    if (to) {
        result = result.filter(c => c.difficulty <= to);
    }
    
    return result;
}

module.exports = {
    getCubes,
    getCubeById,
    createCube,
    editCube,
    deleteCube,
    attachAccessory,
    search
}