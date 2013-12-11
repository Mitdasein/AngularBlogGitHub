var mongoose = require('mongoose');

module.exports = mongoose.model('blog', {
	text : String,
	done : Boolean
});