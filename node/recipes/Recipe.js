//used for recipe information
var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
	name: String,
	step: String,
	complete: boolean,
	ingredient: String
	});

mongoose.model('Recipe', RecipeSchema);
module.exports = mongoose.model('Recipe');
