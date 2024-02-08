var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController.js');
app.use('/users', UserController);

//var RecipeController = require('./recipes/RecipeController.js');
//app.use('/recipes', RecipeController);

module.exports = app;
