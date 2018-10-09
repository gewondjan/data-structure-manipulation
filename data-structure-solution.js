//Javascript file
/* eslint-disable */

//Include the needed tools
var d3 = require('./d3/d3');
var fs = require('fs');


//Get the name of the csv file and put the contents of the file into a string variable
var fileName = process.argv[2];
var contents = fs.readFileSync(fileName).toString();
var linesFromFileArray = d3.csvParse(contents);

//Take off the last element (which is the column names)
linesFromFileArray = linesFromFileArray.slice(0, linesFromFileArray.length);

var countries = linesFromArray.reduce(function (accumulator, current) {


}, {});


// [];
// linesFromFileArray.forEach(function (current) {


//     if (countries.find(function (item) {
//             return item.name == current.Country;
//         })) {

//             var stateObject = {
//                 name: current.State,


//             };
//             countries[countries.indexOf(current.Country)].states.push();


//     } else {
//         var countryObject = {
//             name: current.Country,
//             states: []
//         };
//         countries.push(countryObject);
//     }
// });

//Sort the countries by name
countries.sort(function (country1, country2) {
    return country1.name > country2.name;
});



console.log(countries);