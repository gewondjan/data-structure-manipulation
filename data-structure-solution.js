//Javascript file
/* eslint-disable */

//Include the needed tools
var d3 = require('./d3/d3');
var fs = require('fs');


//Get the name of the csv file and put the contents of the file into a string variable
var fileName = process.argv[2];
var contents = fs.readFileSync(fileName).toString();


console.log(d3.csvParse(contents));