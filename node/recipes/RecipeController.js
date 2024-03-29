//Recipe Controller
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true })); 
router.use(bodyParser.json());
var Recipe = require('./Recipe');

//Creating a new recipe
router.post('/', async function (req, res) {
	try {
		const recipe = await Recipe.create(req.body);
		res.status(200).send({
			name: req.body.name,
			step: req.body.step,
			complete: req.body.complete,
			ingredient: req.body.ingredient,
		});
	} catch (err) {
		res.status(500).send("There was a problem adding the recipe to the database" + err );
	}
});
	
//Performing a GET request to all of the recipes in the database
router.get('/', async function (req, res) {
	try {
	const recipes = await Recipe.find({});
		res.status(200).send(recipes);
		console.log(recipes);
	} catch (err) {
		res.status(500).send("There was a problem getting the recipes");
		console.log(err);
	}
});

router.get('/:name', async function (req, res) {
	try {
	const recipes = await Recipe.find({req.params.name});
		res.status(200).send(recipes);
		console.log(recipes);
	} catch (err) {
		res.status(500).send("There was a problem getting the recipes");
		console.log(err);
	}
});

router.delete('/:id', async function (req, res) {
	try {
		const recipes = await Recipe.findByIdAndDelete(req.params.id);
		res.status(200).send(users);
		console.log(users);
	} catch (err) {
		if (!recipes) return res.status(404).send("No user was found");
		if (err) res.status(500).send("There was a problem getting the recipe");
		console.log(err);
		}
});

