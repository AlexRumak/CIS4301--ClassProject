'use strict';

// Setup the server
// ***************************************************
var express = require('express');
var app = express();
var port = 8000;
var bodyParser = require('body-parser');
var oracledb = require('oracledb');
    oracledb.autoCommit = true;
var dbConfig = require(__dirname + '/app/server/dbConfig.js');
var bcrypt = require('bcrypt');
var flash = require('connect-flash');
var session = require('express-session');
// var cookieParser = require('cookie-parser');

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
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/public/views');
app.use(express.static(__dirname + '/app/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'secret-pepe-found',
    saveUninitialized: false,
    resave: false
}));
app.use(flash());



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
    var invalidUserMessage = req.flash('message')[0];
    res.render('login.ejs', {message: invalidUserMessage});
});

app.post('/login', function(req, res){
    var user = req.body.user;
    var password = req.body.password;

     queryRunner(`SELECT username, password FROM Testuser WHERE username = '${user}'`, function(err, result){
        if(result.rows.length === 0 ){
            console.log(result);   
            req.flash('message', 'Unable to find username or password');
            res.redirect('/login');
        } else{
            var salt = bcrypt.genSaltSync(10);
            var hashedPasswordFromDatabase = result.rows[0][1];
            if(bcrypt.compareSync(password, hashedPasswordFromDatabase)){
                req.session.user = user;
                res.redirect('/test');
            }
            else{
            req.flash('message', 'Unable to find username or password');
            res.redirect('/login');
            }
        }
    });

});

// Page to signup
app.get('/signup', function(req, res){
    var noUserExistsMessage = req.flash('message')[0];
    res.render('signup.ejs', {message: noUserExistsMessage});
});


app.post('/signup', function(req, res){
    // Check if the username is taken
    var user = req.body.user;
    queryRunner(`SELECT username FROM Testuser WHERE username = '${user}'`, function(err, result){
        if(result.rows.length > 0){
            req.flash('message', 'The username already exists');
            res.redirect('/signup');
        }
    });

    var password = req.body.password;
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);

    var query = `INSERT into Testuser values ('${user}', '${hashedPassword}')`;
    queryRunner(query, function(err, result){
        if(err){
            return err;
        }
    });
    res.redirect('/test');
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