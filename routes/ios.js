const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const shortid = require('shortid');
const db = require('./mongo');
const exec = require('child_process').exec;

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/',function(req,res){
	console.log('iOS API called');
	var shID = shortid.generate();
	var myObj = {
		'name' : req.query.name,
		'email' : req.query.email,
		'pos' : req.query.pos,
		'exp' : req.query.exp,
		'loc' : req.query.loc,
		'college' : req.query.college,
		'skills' : req.query.skills,
		'uniqueid' : shID
	}
	
	db.createEmployee(myObj);
	console.log(shID);
	exec('python3 ML/src/test_main.py -id ' + shID,(error,stdout,stderr)=>{
	  if (error){
	    console.log('Error: ' + error);
	    return;
	  }
	  console.log('StdError: ' + stderr);
	  console.log('StdOut: ' + stdout);
	  db.findAllJobs(res,shID);
	});
})

module.exports = router;

