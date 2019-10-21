const express = require('express'); 
const app = express(); 
const bodyParser = require('body-parser');
const methodOverride = require('method-override'); 
require('./db/db')


app.use(methodOverride('_method')); 
app.use(bodyParser.urlencoded({extended: false}));

const nationalController = require('./cotrollers/national.js')
app.use('/national', nationalController);

app.get('/', (req, res) => {
	res.render('index.ejs')
})


app.listen(3000, () => {
	console.log('server listening on port', 3000);
})