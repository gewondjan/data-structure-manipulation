/* eslint-disable */
const before = [{
        key: "year",
        value: "2016"
    },
    {
        key: "make",
        value: "Porsche"
    },
    {
        key: "model",
        value: "911 R"
    },
    {
        key: "color",
        value: "white"
    },
    {
        key: "msrp",
        value: "$184,900"
    }
];

//First we want to get rid of the final key and value

var after = before.filter(function (current) {
    return current.key != "msrp";
});

var result = after.reduce(function (accumulator, current) {
    accumulator[current.key] = current.value;
    return accumulator;
}, {});


console.log(result);