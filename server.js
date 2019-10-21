const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
require('./db/db')














app.listen(3000, () => {
	console.log('server listening on port', 3000);
})