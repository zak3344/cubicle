const uniqid = require('uniqid');

class Cube {
    static #cubes = [
        {
            id: 'asdfqwpoj12340fi-34twekorgl323kl',
            name: 'Test1',
            description: 'testtesttest',
            imageUrl: 'https://www.wired.com/images_blogs/photos/uncategorized/2008/09/23/new_rubiks_cube_5.jpg',
            difficulty: '5'
        }
    ]

    constructor(name, description, imageUrl, difficulty) {
        this.id = uniqid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficulty = difficulty;


        // TODO: Add data check
    }

    static get cubes() {
        return Cube.#cubes.slice();
    }

    static add(cube) {
        Cube.#cubes.push(cube);
    }

}

module.exports = Cube;