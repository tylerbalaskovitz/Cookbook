//User Controller File
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true })); 
router.use(bodyParser.json());
var User = require('./User');

//Creating a new user
router.post('/', async function (req, res) {
		try {
		const user = await User.create(req.body);
		res.status(200).send({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
		});
		}catch(err) {
			 res.status(500).send("There was a problem adding information to the database." + err);
		};
});

//Performs a GET Request to get all of the users in the database
router.get('/', async function (req, res) {
		try { 
		const users = await User.find({});
			res.status(200).send(users);
			console.log(users);
		} catch (err) {
			res.status(500).send("There was a problem getting the users");
			console.log(err);
		}
});

router.get('/:id', async function (req, res) {
		try {
		const users = await User.findById(req.params.id);
			res.status(200).send(users);
			console.log(users);
		} catch (err) {
			res.status(500).send("There was a problem getting the users");
			console.log(err);
		}
module.exports = router;
