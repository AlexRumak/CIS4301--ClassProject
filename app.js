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
//var oracledb = require('oracledb');
//var dbConfig = require('./app/server/dbConfig.js');
// ***************************************************

// Configure the server
// ***************************************************
//require('.app/server/passport')(passport);

//app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', './app/public/views');
app.use(express.static(__dirname + '/public'));
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
// ***************************************************
// require('./app/server/routes.js')(app, passport);
// ***************************************************

app.get('/', function(req, res){
    res.send('Hello');
});

app.get('/login', function (req, res){
    res.render('login.ejs');
});

app.listen(port, function(){
    console.log('Listening on port ' + port);
});
