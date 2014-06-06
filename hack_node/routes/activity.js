/**
 * New node file
 */
var  Activity = require('../models/activity.js'),
     mongoose = require('mongoose'),
     conn = mongoose.connect('mongodb://pafuser:paf#user@localhost:27017/pafrepo'),
     db = mongoose.connection;

exports.findByGuid = function(req, res) {
	
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('Connected to MongoDB');
	});
	

	Activity.findOne({ 'guid': req.params.guid }, function (err, act) {	
	  if (err) return handleError(err);
	  console.log('%s %s is a %s.', act.title, act.subject)
	  res.jsonp(act);
	})	
};

exports.findAll = function(req, res) {
	
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('Connected to MongoDB');
	});
	
	Activity.find({ }).limit(10).exec(function(err, act) {	
	  if (err) return handleError(err);
	  res.jsonp(act);
	})	
};

