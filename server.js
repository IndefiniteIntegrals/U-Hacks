const express = require('express');
const fs = require('fs');
const formidable = require('formidable');
const path = require('path');
const app = express();
const routes = require('./routes');
const LocalStrategy = require('passport-local');
const passport = require('passport');
const passportLoacalMongoose = require('passport-local-mongoose');
const mongodb = require('mongodb');
const port = 4000;

app.use('/api/v1',routes.api);
app.use('/api/v1/ios',routes.ios);
app.use('/user',routes.login);

app.use(function(req, res, next){
  res.locals.user = req.user;
  next();
});

app.use(express.static('public'));
app.set('view engine','ejs');



app.listen(port,function(){
    console.log('Server is up and running on port : 4000');
})