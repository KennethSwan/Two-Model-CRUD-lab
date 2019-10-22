const mongoose = require('mongoose'); 

const americanSchema = new mongoose.Schema({
	name: String, 
	city: String, 
	field: String
})

const American = mongoose.model('American', americanSchema); 

module.exports = American; 