const Accessory = require('../controllers/accessoryController');


const create = (name, description, imageUrl) => {
    return Accessory.create({ name, description, imageUrl });
}

const accessoryService = {
    create,
}

module.exports = accessoryService;