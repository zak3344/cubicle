const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const engine = require('express-handlebars').engine;

const { auth } = require('../middlewares/authMiddleware');

module.exports = (app) => {
    // Setup Cookie Parser
    app.use(cookieParser());

    // Add Auth middleware (chech for token in any requiest)
    app.use(auth);

    // Setup the view engine
    app.engine('hbs', engine({ extname: 'hbs' }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve(__dirname, '../views'));

    // Setup the body parser
    app.use(express.urlencoded({ extended: true }));

    // Set up static files
    app.use( express.static(path.resolve(__dirname, '../public')));
};