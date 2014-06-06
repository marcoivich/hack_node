/**
 * New node file
 */

exports.list = function(req, res){
	
	var mongoose = require('mongoose');
	
//	var options = {
//			  db: { native_parser: true },
//			  user: 'pafuser',
//			  pass: 'paf#user'
//			}
	
	mongoose.connect('mongodb://pafuser:paf#user@localhost:27017/pafrepo');
	
	var Schema = mongoose.Schema;

	var activitySchema = new Schema({
      //_id: ObjectId,
      _class: String, 	  
	  subject:  String,
	  format: [String],
	  contentTypeTier1:   [String],
	  contentTypeTier2 : String,
	  educationalAlignment: [String],
	  refId: String,
	  defaultContentType: String,
	  bookTitle: String,
	  chapterTitle: String,
	  bookISBN: String,
	  bookAuthor: String,	  
	  editionNumber: String,
	  activityType: String,
	  payloads: [{ contentType: String, documentGuid: String }],
	  //@id: String,
	  created: Date,
	  modified: Date,
	  owner: String,
	  title: String,
	  guid: String,
	  crawlable: Boolean,
	  deleted: Boolean 
	}, { collection : 'activity' });
	
	// assign a function to the "statics" object of our activitySchema
//	activitySchema.statics.findByTitle = function (title, cb) {
//	  this.find({ title: new RegExp(title, 'i') }, cb);
//	};
	
	// assign a function to the "methods" object of our animalSchema
//	activitySchema.methods.findByTitle = function (t, cb) {
//	  return this.model('Activity').find({ title: new RegExp(t, 'i') }, cb);
//	}

	var activity = mongoose.model('activity', activitySchema);
	
	
	
	//var Person = mongoose.model('Person', yourSchema);

	
	//var activity = new Activity({ });
	
	console.log('Activity schema defined');
	
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback () {
		console.log('Connected to MongoDB');
	});
	
	
	activity.findOne({ 'guid': '04954774-aac3-47a7-81b2-d5387a301b2f' }, function (err, act) {
	  if (err) return handleError(err);
	  console.log('%s %s is a %s.', act.title, act.subject)
	  res.send(act.title);
	})

//	activity.findByTitle('Pre 15.2.6', function (err, activity) {
//	  if(activity != null) {	
//		  console.log(activity.title);
//		  res.send("activities = " + activity);
//	  }
//	  res.send("activities = null ");
//	});
	
	//db.close();

};
