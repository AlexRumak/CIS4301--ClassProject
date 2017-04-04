/*
This file contains the paths we direct users when they navigate the site
'/' Refers to the home page (in our case localhost:port)
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Home Page');
});

router.get('/login', function (req, res){
    res.render('login.ejs');
});

router.get('/action', function(req, res){
    res.render('action.ejs');
});

module.exports = router;