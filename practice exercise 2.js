/* eslint-disable */
var things = [{
        key: "name",
        value: "jared"
    },
    {
        key: "age",
        value: "old",
    },
    {
        key: "food",
        value: "bacon"
    },
    {
        key: "food",
        value: "pizza"
    },
    {
        key: "food",
        value: "cubby's"
    },
    {
        key: "food",
        value: "wings"
    },
    {
        key: "food",
        value: "shakes"
    }
];

// var after = before.map(function (current) {
//     return {
//         [current.key]: current.value
//     };
// });

// console.log(after);

// var answer = after.reduce(function (accumulator, current) {
//     console.log(accumulator)
//     var currentKey = Object.keys(current)[0];

//     if (accumulator === null || Object.keys(accumulator).indexOf(currentKey) === -1) {
//         accumulator[currentKey] = current[currentKey];
//     } else {
//         accumulator[currentKey] = [].concat(accumulator[currentKey], current[currentKey]);
//         accumulator[currentKey] = accumulator[currentKey].sort();
//     }
//     return accumulator;

// }, {});

var answer = things.reduce((acc, thing) => {
    acc[thing.key] = [].concat((acc[thing.key] ? acc[thing.key] : []), thing.value);
    return acc;
}, {});
answer = Object.keys(answer).reduce((acc, key) => {
    acc[key] = acc[key].length === 1 ? acc[key][0] : acc[key];
    return acc;
}, answer)

// OR...
// Object.keys(answer).forEach((key) => answer[key] = answer[key].length === 1 ? answer[key][0] : answer[key]);

console.log(answer);