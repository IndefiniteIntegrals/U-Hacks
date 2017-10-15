const express = require('express');
const fs = require('fs');
const router = express.Router();
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const passportLoacalMongoose = require('passport-local-mongoose');
const mongodb = require('mongodb');
const User = require('./model/user');
const mongoose = require('mongoose');
const path = require('path');
const formidable = require('formidable');
const exec = require('child_process').exec;

const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/mydb';

router.use(bodyParser.urlencoded({extended: true}));
router.use(require("express-session")({
    secret: "wah wah wah",
    resave: false,
    saveUninitialized: false
}));

mongoose.connect('mongodb://localhost:27017/mydb');

router.use(passport.initialize());
router.use(passport.session());
router.use(express.static('public'));
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect('/user/login');
}

router.get('/',isLoggedIn,function(req,res){
	res.render('home',{'name':req.user.name});
	console.log()
})

router.get('/login',function(req,res){
	res.render('login');
	console.log(res.locals.user)
})

router.post('/login',passport.authenticate("local",{
	successRedirect : '/user',
	failureRedirect : '/user/login'
}),function(req,res){
})

router.get("/register", function(req, res) {
	res.render('register');
});

// register post
router.post("/register", function(req,res){
    User.register(new User({username: req.body.username,name: req.body.name}), req.body.password, function(err, user){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req, res, function(){
           res.redirect("/user/login");
        });
    });
});

router.get('/upload',isLoggedIn,function(req,res){
    console.log('share page');
    res.writeHead(200,{'Content-Type':'text/html'});
    var myFile = fs.createReadStream('html/upload.html')
    myFile.pipe(res);
})

router.post('/upload',isLoggedIn,function(req,res){
	var form = new formidable.IncomingForm();

    form.parse(req,(err,fields,files)=>{
        var oldPath = files.filename.path;
        var newPath ='ML/csv/' + req.user.username + '.csv';
        fs.rename(oldPath,newPath,function(err){
            if(err){
                throw(err);
            }
            console.log('Some File Uploaded');
            console.log('Training Model');
            console.log(__dirname);
            exec('python3 ML/src/train_main.py -id ' + req.user.username + ' -f ' + req.user.username + '.csv',(error,stdout,stderr)=>{
			  if (error){
			    console.log('Error: ' + error);
			    return;
			  }
			  console.log('StdError: ' + stderr);
			  console.log('StdOut: ' + stdout);
			});

            res.send('File Uploaded');
        })
    })
})

router.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/user/login");
});

module.exports = router;
