const path = require('path');
const express = require('express');
const initHandlebars = require('./config/handlebars');

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





app.listen(config.PORT, console.log.bind(console, `App is running on port http://localhost:${config.PORT}`));