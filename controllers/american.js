const express = require('express'); 
const router = express.Router();
const American = require('../models/american')
const National = require('../models/national')

router.get('/', (req, res) => {
	American.find({}, (err, foundAmerican) => {
		if(err){
			res.send(err);
		} else {
			res.render('american/index.ejs', {
				american: foundAmerican
			})
		}
	})
})

router.get('/new', (req, res) => {
	American.find({}, (err, allAmerican) => {
		if(err){
			res.send(err);
		} else {
			console.log(allAmerican);
			res.render('american/new.ejs', {
				american: allAmerican
			})
		}
	})
})

// show route

module.exports = router;