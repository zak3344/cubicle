const path = require('path');
const express = require('express');
const initHandlebars = require('./config/handlebars');
const initDatabase = require('./config/database');

const routes = require('./routes');
const config = require('./config/config.json')[process.env.NODE_ENV];



const app = express();

app.use(express.urlencoded({ extended: true }));
// parse the data from form data // extended: true - for complicated data

initHandlebars(app);  // or next row 
// require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));  //Serves static files
// app.use(express.static('./public'));  //Serves static files

app.use(routes);

console.log(config.DB_CONNECTION_STRING);
initDatabase(config.DB_CONNECTION_STRING)
    .then(() => {
        app.listen(config.PORT, console.log.bind(console, `App is running on port http://localhost:${config.PORT}`));
    })
    .catch(err => {
        console.log(err);
    });

