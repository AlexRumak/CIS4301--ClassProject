/* 
This file contains the credentials needed for connecting to the Oracle server
*/

module.exports = {
    user: "", // Put in your Oracle user name here
    password: "", // Password here
    connectString: "oracle.cise.ufl.edu:1521/orcl", // The specific CISE Oracle DB instance
    externalAuth: false // Used for authenticating with another application
};
