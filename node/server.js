//server with things
var app = require('./app');
var port = process.env.PORT || 3333;
var server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
	});
