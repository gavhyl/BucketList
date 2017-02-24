var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BucketListSchema = new Schema({
	title: {
		type: String
	},
	topic: {
		type: String
	},
	url: {
		type: String
	}
	content: {
		type: String
	}
	specificUser: {
		type: String
	}
});

module.exports = mongoose.model('BucketList', BucketListSchema)