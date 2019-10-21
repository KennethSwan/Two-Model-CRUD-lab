const express = require('express'); 
const router = express.Router();
const National = require('../models/national')

router.get('/', (req, res) => {
	res.render('national/index.ejs')
})

router.get('/new', (req, res) => {
	res.render('national/new.ejs')
})

module.exports = router;