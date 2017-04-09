'use strict';

// Setup the server
// ***************************************************
var express = require('express');
var app = express();
var port = 8000;
var bodyParser = require('body-parser');
var oracledb = require('oracledb');
    oracledb.autoCommit = true;
    oracledb.outFormat = oracledb.OBJECT;
var dbConfig = require(__dirname + '/app/server/dbConfig.js');
var bcrypt = require('bcrypt');
//var passport = require('passport');
//var flash = require('connect-flash');
//var session = require('express-session');
//var cookieParser = require('cookie-parser');

var queryRunner = function(queryString, callback){
    oracledb.getConnection(
    {
        user:           dbConfig.user,
        password:       dbConfig.password,
        connectString:  dbConfig.connectString
    }, 
    function(err, connection)
    {
        if(err){
            console.log(err.message);
            connection.close();
            return;
        }

        connection.execute(queryString, [],
        function(err, result){  
            if(err){
                console.log(err.message);
                connection.close();
                return callback(err);
            }
            return callback(null, result);
        });
    });    
}

// Configure the server
// ***************************************************
//require('.app/server/passport')(passport);

//app.use(morgan('dev'));
//app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/public/views');
app.use(express.static(__dirname + '/app/public'));
// ***************************************************

/*
app.use(session({
    secret: 'lol',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
*/

// Routes
// Defines the different web pages users are directed to
// '/' Refers to the home directory (localhost:port)
// '/login' Refers to localhost:port/login
// ***************************************************

// Default home page
// Leads them to login or signup 
app.get('/', function(req, res){
    res.render('index.ejs');
});

// Page to login 
app.get('/login', function(req, res){
    res.render('login.ejs');
});

// Page to signup
app.get('/signup', function(req, res){
    res.render('signup.ejs');
});

// TODO: Hash the password
app.post('/signup', function(req, res){
    var user = req.body.user;
    var password = req.body.password;

    var query = `INSERT into Testuser values ('${user}', '${password}')`;
    queryRunner(query, function(err, result){
        if(err){
            return err;
        }
    });

});

// Testing queries
app.get('/test', function(req, res){
    res.render('testquery.ejs');
});

app.post('/test', function(req, res){
    var query = req.body.query;
    
    queryRunner(query, function(err, result){
        if(err){
            return res.send(err.message);
        }
        else{
            return res.send(result.rows);
        }
    });
});

app.listen(port, function(){
    console.log('Listening on port ' + port);
});
