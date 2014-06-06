/**
 * New node file
 */
    var mongoose = require('mongoose');
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
	
	module.exports = mongoose.model('Activity', activitySchema);