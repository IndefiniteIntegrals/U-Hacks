const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const shortid = require('shortid');
const db = require('./mongo');
const MongoClient = mongodb.MongoClient;
const router = express.Router()

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/',function(req,res){
    console.log('API is working');
    res.send('API is working');
})


router.get('/findAll',function(req,res){
	console.log('Finding all jobs');
	db.findAllJobs(res);
})

router.post('/flowxo',function(req,res){
	var shID = shortid.generate()
    var myObj = {
        'jobprofile' : req.body.profile,
        'recid' : req.body.recid,
        'recname' : req.body.recname,
        'recloc' : req.body.recloc,
        'type' : req.body.type,
        'emptype' : req.body.emptype,
        'recmob' : req.body.recmob,
        'recmail' : req.body.recmail,
        'deadline' : req.body.deadline,
        'uniqueid' : shID
    }
    console.log('FlowXo API Called');
    db.createJob(myObj);
    console.log(shID);
    res.send();
})

module.exports = router;