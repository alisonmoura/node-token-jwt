const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const config = require('./config');
const User = require('./app/models/user');

const port = process.env.PORT || 3000;
mongoose.connect(config.database);
app.set('superSecret', config.secret);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.listen(port);
console.log('Server is running in http://localhost:' + port);