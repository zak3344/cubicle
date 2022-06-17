const Cube = require('../modles/Cube');


const cubeDb = [];

const getAll = () => Cube.cubes;

const create = (name, descriptionm, imageUrl, difficulty) => {
    let cube = new Cube(name, descriptionm, imageUrl, difficulty);
    Cube.add(cube);
};


const cubeService = {
    getAll,
    create
}

module.exports = cubeService;