const port = 5000;
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

app.set('views', path.resolve(__dirname));
app.engine('hbs', handlebars({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')

app.all('/', (req, res) => {
    res.render('index', { layout: false});
    res.end();
})


app.listen(port, console.log.bind(console, `App is running on port http://localhost:${port}`));