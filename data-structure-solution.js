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


var countries = linesFromFileArray.reduce(function (countriesArray, line) {

    //Create objects to be used if needed

    //Create a new City object
    var newCityObject = {
        name: line.City,
        population: line.Population
    };

    //Create a new State Object
    var cityArray = [];
    cityArray.push(newCityObject);
    var newStateObject = {
        name: line.State,
        cities: cityArraygit
    };

    //Create a new Country Object
    var stateArray = [];
    stateArray.push(newStateObject);
    var newCountryObject = {
        name: line.Country,
        states: stateArray
    };

    //Now we go through and determine at what level we need to add the new object (to country, state, or city)

    indexOfCountry = countriesArray.findIndex(function (country) {
        return country.name === line.Country;
    });

    if (indexOfCountry != -1) {
        //Country Exists
        //We need to see if the state exists

        indexOfState = countriesArray[indexOfCountry].states.findIndex(function (state) {
            return state.name === line.State;
        });

        if (indexOfState != -1) {
            //State Exists
            indexOfCity = countriesArray[indexOfCountry].states[indexOfState].cities.findIndex(function (city) {
                return city.name === line.City;
            });

            if (indexOfCity != -1) {
                //City Exists
                //We should never enter this code unless there was a duplicate line
                console.log("There is a duplicate line");
            } else {
                //City does not exist, so add new city object
                countriesArray[indexOfCountry].states[indexOfState].cities.push(newCityObject);
                //Sort the city objects by population
                countriesArray[indexOfCountry].states[indexOfState].cities.sort(function (city1, city2) {
                    return city1.population - city2.population;
                });
            }

        } else {
            //State Does not Exist, so add new state object
            countriesArray[indexOfCountry].states.push(newStateObject);
            //Sort the state objects by name
            countriesArray[indexOfCountry].states.sort(function (state1, state2) {
                return state1.name > state2.name;
            });
        }

    } else {
        //Country Does not Exist
        countriesArray.push(newCountryObject);
        //Sort the countries by name
        countriesArray.sort(function (country1, country2) {
            return country1.name > country2.name;
        });
    }

    return countriesArray;
}, []);



console.log(JSON.stringify(countries, null, 4));