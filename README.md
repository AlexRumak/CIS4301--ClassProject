# FL Prison Stats :oncoming_police_car:

A web app that provides users with an easy way to visualize crime data stored in a database.Users can submit queries to find out detailed information such as the number of crimes committed in a particular county or location, offences committed with respect to race/gender/age, and be shown graphical representations of crime trends. 

The data set was pulled from the [Florida Department of Corrections](http://www.dc.state.fl.us/pub/obis_request.html) *Note the data used at the time of writing was from January.*

## Features
:mag_right: Query the database based on criteria

:bar_chart: Show trends or graphical representation of data

## Software Stack

[NodeJs](https://nodejs.org/en/)

- JavaScript runtime environment. Use this along with the installed modules to run the app. 

[NPM](https://docs.npmjs.com/) 
- Responsible for installing modules through the terminal/shell.

**Main modules**
- [Express](http://expressjs.com/) - Required for running the server
- [ejs](http://ejs.co/) - Used for creating the web pages when we get the query results
- [Node OracleDB](https://github.com/oracle/node-oracledb/blob/master/INSTALL.md) - Used for connecting to the Oracle CISE Database through Node.js

To run the app:

`node app.js`

To install all the dependencies:

`npm install`

To install a specific module:

`npm install <module-name> --save`


`CIS4301--ClassProject/app/server/dbConfig.js` is the file where you need to enter your CISE Oracle credentials. **Make sure not to commit this file if you saved your credentials.** You will need to create this file if it does not already exist. It should take the following format:

```javascript
/* 
This file contains the credentials needed for connecting to the Oracle server
*/
module.exports = {
    user: "", // Put in your Oracle user name here
    password: "", // Password here
    connectString: "" // The specific Oracle DB instance
};
```


After running node app.js the terminal should display

> Listening on port 8000...

Open your browser and go to localhost:8000/test to check if you can get the test query.

