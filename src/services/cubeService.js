const res = require('express/lib/response');
const Cube = require('../modles/Cube');


const cubeDb = [];

const getAll = () => Cube.cubes;

const getOne = (id) => Cube.cubes.find(c => c.id == id);

const create = (name, descriptionm, imageUrl, difficulty) => {
    let cube = new Cube(name, descriptionm, imageUrl, difficulty);
    Cube.add(cube);
};

const search = (text, from, to) => {
    let result = Cube.cubes;

    if (text) {
        result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
    }

    if(from) {
        result = result.filter(x => x.difficulty >= from);
    }

    if(to) {
        result = result.filter(x => x.difficulty <= to);
    }

    if( !text && !from && !to) {
        result = '';
    }

    return result;    
}
 


const cubeService = {
    getAll,
    getOne,
    create,
    search
}

module.exports = cubeService;