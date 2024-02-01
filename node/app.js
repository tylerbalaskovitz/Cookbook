var express = require('express');
var app = express();
var db = require('./db');
var UserController = require('./user/UserController.js');
var RecipeController = require('./recipes/RecipeController.js');
app.use('/users', UserController);
app.use('/recipes', RecipeController);
module.exports = app;
