'use strict'

const express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    mysql = require('mysql'),
    myConnection = require('express-myconnection');

const app = express();

// importing routes
const videoRoutes = require('./routes/video');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12341317',
    password: 'm24iFELnJZ',
    database: 'sql12341317',
    port: 3306
}, 'single'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', videoRoutes);

// static files
app.use(express.static(path.join(__dirname, '/public')));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});