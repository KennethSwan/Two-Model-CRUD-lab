const express = require('express'); 
const router = express.Router();
const National = require('../models/national')
const American = require('../models/american')

router.get('/', (req, res) => {
	National.find({}, (err, allNational) => {
		if(err){
			res.send(err);
		} else {
			res.render('national/index.ejs', {
				national: allNational
			})
		}
	})
})

router.get('/new', (req, res) => {
	res.render('national/new.ejs');
})

router.get('/:id/edit', (req, res) => {
	National.findById(req.params.id, (err, foundNational) => {
		if(err){
			res.send(err);
		} else {
			res.render('national/edit.ejs', {
				national: foundNational
			})
		}
	})
})

router.put('/:id', (req, res) => {
	National.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,updatedNational) => {
		if(err){
			res.send(err)
		} else {
			res.redirect('/national/' + req.params.id)
		}
	})
})

router.get('/:id', (req, res) => {
	National.findById(req.params.id)
	.populate({path: 'city'})
	.exec((err, foundNational) => {
		if(err){
			res.send(err);
		} else {
			res.render('national/show.ejs', {
				national: foundNational
			})
		}
	})
})

router.delete('/:id', (req, res) => {
	National.findByIdAndRemove(req.params.id, (err, deletedNational) => {
		if(err){
			res.send(err);
		} else {
			console.log(deletedNational);
			National.remove({
				_id: {
					$in: deletedNational.city
				  }	
				}, (err, response) => {
					console.log(response);
					res.redirect('/national')
				})
			}
		})
	})

router.post('/', (req, res) => {
	National.create(req.body, (err, createdNational) => {
		if(err){
			res.send(err);
		} else {
			console.log(createdNational);
			res.direct('/national')
		}
	})
})

module.exports = router;