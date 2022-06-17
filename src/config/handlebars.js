const handlebars = require('express-handlebars');
const path = require('path');


const initHandlebars = (app) => {

    app.set('views', path.resolve(__dirname, '../views'));

    app.set('view engine', 'hbs');
    
    app.engine('hbs', handlebars.engine({
        extname: '.hbs'
        // defaultLayout: 'main',
    }));
    
};

module.exports = initHandlebars;