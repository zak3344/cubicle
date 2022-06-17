const Cube = require('../modles/Cube');


const cubeDb = [];

const create = (name, descriptionm, imageUrl, difficulty) => {

    let cube = new Cube(name, descriptionm, imageUrl, difficulty);

    cubeDb.push(cube);
};


const cubeService = {
    create
}

module.exports = cubeService;