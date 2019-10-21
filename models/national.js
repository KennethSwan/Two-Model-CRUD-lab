const mongoose = require('mongoose'); 

const nationalSchema = new mongoose.Schema({
	name: String, 
	city: String, 
	field: String
})

const National = mongoose.model('National', nationalSchema); 

module.exports = National; 