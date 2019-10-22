const mongoose = require('mongoose'); 

const nationalSchema = new mongoose.Schema({
	name: String, 
	city: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'City'
	}], 
	field: String

})

const National = mongoose.model('National', nationalSchema); 

module.exports = National; 