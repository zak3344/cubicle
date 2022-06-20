const Cube = require('../modles/Cube');


const cubeDb = [];

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(c => c.id == id);

const create = (name, descriptionm, imageUrl, difficulty) => {
    let cube = new Cube(name, descriptionm, imageUrl, difficulty);
    Cube.add(cube);
};

const search = (text, from, to) => Cube.cubes.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))


const cubeService = {
    getAll,
    getOne,
    create,
    search
}

module.exports = cubeService;