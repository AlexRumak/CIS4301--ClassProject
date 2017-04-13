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
var connection = require(__dirname + '/server/connection.js');

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
    store: connection.sessionStore
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
    connection.queryRunner(`SELECT username, password FROM websiteUsers WHERE username = '${user}'`, function(err, result){
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
    connection.queryRunner(`SELECT username FROM websiteUsers WHERE username = '${user}'`, function(err, result){
        if(result.rows.length > 0){
            req.flash('message', 'The username already exists');
            res.redirect('/signup');
        } else {
            // Hash the password before storing it in the database
            var password = req.body.password;
            var salt = bcrypt.genSaltSync(10);
            var hashedPassword = bcrypt.hashSync(password, salt);

            var query = `INSERT INTO websiteUsers (username, password) values ('${user}', '${hashedPassword}')`;
            connection.queryRunner(query, function(err, result){
                if(err){
                    return err;
                }
            });
            res.redirect('/test');
        }
    });
});

app.post('/logout', function(req, res){
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

// Giant search form page
app.get('/search', function(req, res){
   res.render('search.ejs', {user: req.session.user});
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
    
    connection.queryRunner(query, function(err, result){
        if(err){
            return res.send(err.message);
        }
        else{
            return res.send(result.rows);
        }
    });
});

// Giant search form page
app.get('/search', function(req, res){
    res.render('search.ejs', {user: req.session.user});
});

// Render the results on a search submission
app.get('/results', function(req, res){
    // Function below breaks the URL up given
    // a URI such as /results?params='paramValue'&moreParams
    function getParameterByName(name, url) {
        if (!url) {
            url = req.url;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results){ 
            return null;
        }
        if (!results[2]){
            return '';
        } 
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var firstName = getParameterByName('first');
    var lastName = getParameterByName('last');


    var queryString = `SELECT * FROM Inmate where firstName like '%${firstName}%' AND lastName like '%${lastName}%'`;


    connection.queryRunner(queryString, function(err, results){
        if(err){
            return err;
        }
        res.render('results.ejs', {user: req.session.user, records: results});
    });
});

// Render the results on a residence search submission
app.get('/rdresults', function(req, res){
    // Function below breaks the URL up given
    // a URI such as /results?params='paramValue'&moreParams
    function getParameterByName(name, url) {
        if (!url) {
            url = req.url;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results){ 
            return null;
        }
        if (!results[2]){
            return '';
        } 
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var firstName = getParameterByName('first');
    var lastName = getParameterByName('last');
    var dcn = getParameterByName('dcn');

    var queryString = `SELECT * FROM Residence where firstname = '${firstName}' AND lastname = '${lastName}' AND DCNumber = '${dcn}'`;

    connection.queryRunner(queryString, function(err, results){
        if(err){
            return err;
        }
        res.render('results.ejs', {user: req.session.user, records: results});
    });
});

// Render the results on an offense search submission
app.get('/rdresults', function(req, res){
    // Function below breaks the URL up given
    // a URI such as /results?params='paramValue'&moreParams
    function getParameterByName(name, url) {
        if (!url) {
            url = req.url;
        }
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
        if (!results){ 
            return null;
        }
        if (!results[2]){
            return '';
        } 
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var firstName = getParameterByName('first');
    var lastName = getParameterByName('last');
    var dcn = getParameterByName('dcn');
    var county = getParameterByName('county');

    var queryString = `SELECT * from Offense where `
    connection.queryRunner(queryString, function(err, results){
        if(err){
            return err;
        }
        res.render('results.ejs', {user: req.session.user, records: results});
    });
});

// Start the server
app.listen(port, function(){
    console.log('Listening on port ' + port);
});