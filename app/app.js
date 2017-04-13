'use strict';

// Setup the server
// ***************************************************
var express = require('express');
var app = express();
var port = 8000;
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var session = require('express-session');
var oracledb = require('oracledb');
    oracledb.autoCommit = true;
    oracledb.maxRows = 1000000;
var oracledbStore = require('express-oracle-session')(session);
var dbConfig = require(__dirname + '/server/dbConfig.js');
require(__dirname + '/server/passwordManager.js');

var credentials = { 
        user:           dbConfig.user,
        password:       dbConfig.password,
        connectString:  dbConfig.connectString
}

var sessionStore = new oracledbStore(credentials);

// Funtcion used to run the queries against the OracleDB
var queryRunner = function(queryString, callback){
    oracledb.getConnection(credentials, 
    function(err, connection)
        {
        if(err){
            console.log(err.message);
            connection.close();
            return;
        }

        connection.execute(queryString,
        function(err, result){  
            if(err){
                console.log(err.message);
                connection.close();
                return callback(err);
            }
            connection.close();
            return callback(null, result);
        });
    });    
}

// Configure the server
// ***************************************************
app.set('view engine', 'ejs'); // Renders the pages that are displayed to users
app.set('views', __dirname + '/public/views'); // Set the views directory
app.use(express.static(__dirname + '/public')); // Set the directory to serve static files (CSS, images, etc.)
app.use(bodyParser.json()); // Used to parse JSON objects passed
app.use(bodyParser.urlencoded({extended: true})); // Used to parse the form data
app.use(session({ // Creates lasting sessions
    secret: 'secret-pepe-found', 
    saveUninitialized: false,
    resave: false,
    store: sessionStore
}));
app.use(flash()); // Used to display the warning messages when login/signup fails

// Routes
// Defines the different web pages users are directed to
// '/' Refers to the home directory (localhost:port)
// '/login' Refers to localhost:port/login
// ***************************************************
/*
 * This file manages connections to and from sign-up and log-in pages
 */
var session = require('express-session');

// Page to login 
app.get('/login', function(req, res){
    var invalidUserMessage = req.flash('message')[0];
    res.render('login.ejs', {user: req.session.user, message: invalidUserMessage});
});

// Called when a form gets submitted in the login  page
app.post('/login', function(req, res){
    var user = req.body.user;
    var password = req.body.password;

    // Checks if the user exists
    // If the user doesn't exist, reload the login page
    queryRunner(`SELECT username, password FROM websiteUsers WHERE username = '${user}'`, function(err, result){
        if(result.rows.length === 0 ){
            req.flash('message', 'Unable to find username or password');
            res.redirect('/login');
        } else{
            // If user exists, compare their hashed password with the password stored in the DB
            var salt = bcrypt.genSaltSync(10);
            var hashedPasswordFromDatabase = result.rows[0][1];
            if(bcrypt.compareSync(password, hashedPasswordFromDatabase)){
                // Start the session and set the user variable to be the username
                req.session.user = user;
                res.redirect('/action');
            } else {
            req.flash('message', 'Unable to find username or password');
            res.redirect('/login');
            }
        }
    });

});

// Page to signup
app.get('/signup', function(req, res){
    var noUserExistsMessage = req.flash('message')[0];
    res.render('signup.ejs', {user: req.session.user, message: noUserExistsMessage});
});

// Called when the user sumits a form on the signup page
app.post('/signup', function(req, res){
    // Check if the username is taken
    var user = req.body.user;
    queryRunner(`SELECT username FROM websiteUsers WHERE username = '${user}'`, function(err, result){
        if(result.rows.length > 0){
            req.flash('message', 'The username already exists');
            res.redirect('/signup');
        } else{
            // Hash the password before storing it in the database
            var password = req.body.password;
            var salt = bcrypt.genSaltSync(10);
            var hashedPassword = bcrypt.hashSync(password, salt);

            var query = `INSERT INTO websiteUsers (username, password) values ('${user}', '${hashedPassword}')`;
            queryRunner(query, function(err, result){
                if(err){
                    return err;
                }
            });
            res.redirect('/test');
        }
    });
});

app.post('/logout', function(req, res){
    console.log('aotweiofoe');
    req.session.destroy();
    res.redirect('/');
});

// Home page - leads them to login or signup 
app.get('/', function(req, res){
    if(req.session.user){
        res.redirect('/action');
    } else{
        res.render('index.ejs', {user: req.session.user});
    }
});

app.get('/action', function(req, res){
    res.render('action.ejs', {user: req.session.user});
})

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

// Testing if session works
app.get('/session', function(req, res){
    res.send(req.session);
});

// Start the server
app.listen(port, function(){
    console.log('Listening on port ' + port);
});