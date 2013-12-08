var mongoose = require('mongoose'); 

module.exports = mongoose.model('Post', {
	text : String,
	done : Boolean
});