/**
 * New node file
 */

exports.list = function(req, res){
	
	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/pafrepo');
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('Connected to MongoDB');
	});
	db.close();
	res.send("respond with a resource from activity");
};
