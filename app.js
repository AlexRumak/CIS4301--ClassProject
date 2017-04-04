// Setup the server
// ***************************************************
var express = require('express');
var app = express();
var port = 8000;

var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var oracledb = require('oracledb');
var dbConfig = require('./app/server/dbConfig.js');


// Configure the server
// ***************************************************
//require('.app/server/passport')(passport);

//app.use(morgan('dev'));
//app.use(cookieParser());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './app/public/views');
app.use(express.static('./app/public'));
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

app.get('/login', function(req, res){
    res.render('login.ejs');
});



// Testing queries
app.get('/test', function(req, res){
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

        connection.execute("SELECT * FROM Zipcode",
        function(err, result){
            if(err){
                console.log(err.message);
                connection.close();
                return;
            }
            res.send(result.rows);
            console.log(result.rows);
        });
    });    

});





app.listen(port, function(){
    console.log('Listening on port ' + port);
});
