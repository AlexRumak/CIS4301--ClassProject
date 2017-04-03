/*
This file contains the paths we direct users when they navigate the site
'/' Refers to the home page
*/

module.exports = function(app, passport){
    // Home page
    app.get('/', function(req, res) {
        res.render('./app/public/views/index.html');
    });

    // Login page
    app.get('/login', function(req, res){
        res.render('./app/public/views/login.html', {message: req.flash('loginMessage') });
    });

    

}