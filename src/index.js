const port = 5000;
const path = require('path');
const express = require('express');
const initHandlebars = require('./config/handlebars');
const routes = require('./routes');



const app = express();

initHandlebars(app);  // or next row 
// require('./config/handlebars')(app);

app.use(express.static(path.resolve(__dirname, './public')));  //Serves static files
// app.use(express.static('./public'));  //Serves static files

app.use(routes); 





app.listen(port, console.log.bind(console, `App is running on port http://localhost:${port}`));