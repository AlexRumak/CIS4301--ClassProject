var session = require('express-session');
var oracledb = require('oracledb');
    oracledb.autoCommit = true;
    oracledb.maxRows = 100000;
var oracledbStore = require('express-oracle-session')(session);
var dbConfig = require(__dirname + '/dbConfig.js');

var credentials = { 
        user:           dbConfig.user,
        password:       dbConfig.password,
        connectString:  dbConfig.connectString
}

var sessionStore = new oracledbStore(credentials);


// Function used to run the queries against the OracleDB
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

module.exports = {
    queryRunner,
    sessionStore,
    credentials
}