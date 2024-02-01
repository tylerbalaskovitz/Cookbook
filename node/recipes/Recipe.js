//used for recipe information
var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
	step: String,
	complete: boolean,
	ingredient: String
	});

mongoose.model('Recipe', RecipeSchema);
module.exports = mongoose.model('Recipe');
