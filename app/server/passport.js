// Setup for local use
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport){
    // Require for login sessions
    
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use(new LocalStrategy( 
        function(username, password)))
}