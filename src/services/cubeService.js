const Cube = require('../modles/Cube');


const getOne = (id) => Cube.findOne(id);

const create = (name, description, imageUrl, difficulty) => {
    return Cube.create({ name, description, imageUrl, difficulty });
};

// const search = (text, from, to) => {
//     let result = Cube.cubes;

//     if (text) {
//         result = result.filter(x => x.name.toLowerCase().includes(text.toLowerCase()));
//     }

//     if (from) {
//         result = result.filter(x => x.difficulty >= from);
//     }

//     if (to) {
//         result = result.filter(x => x.difficulty <= to);
//     }

//     if (!text && !from && !to) {
//         result = '';
//     }

//     return result;
// }



const cubeService = {
    getAll,
    getOne,
    create
}

module.exports = cubeService;