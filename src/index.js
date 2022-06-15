const port = 5000;
const express = require('express');
const initHandlebars = require('./config/handlebars');

const app = express();

initHandlebars(app);  // or next row 
// require('./config/handlebars')(app);

app.use(express.static('./public'));  //Serves static files


app.all('/', (req, res) => {
    res.render('index');
});


app.listen(port, console.log.bind(console, `App is running on port http://localhost:${port}`));