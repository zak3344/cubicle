const port = 5000;
const express = require('express');
const initHandlebars = require('./config/handlebars');

const app = express();

initHandlebars(app);

app.all('/', (req, res) => {
    res.render('index', { layout: false});
});


app.listen(port, console.log.bind(console, `App is running on port http://localhost:${port}`));