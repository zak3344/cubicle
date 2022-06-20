const Cube = require('../modles/Cube');


const cubeDb = [];

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(c => c.id == id);

const create = (name, descriptionm, imageUrl, difficulty) => {
    let cube = new Cube(name, descriptionm, imageUrl, difficulty);
    Cube.add(cube);
};




const cubeService = {
    getAll,
    getOne,
    create
}

module.exports = cubeService;