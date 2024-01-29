var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController.js');
app.use('/users', UserController);
module.exports = app;
