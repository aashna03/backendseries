console.log("Sum file executed");

var x = "sum calculation"
function calculateSum(a,b){
    return a+b;
}

// console.log(module.exports); // ouput --> {} empty object

module.exports = {
    x : x,
    calculateSum : calculateSum
};

// // or
// module.exports.x = x
// module.exports.calculateSum = calculateSum

// // shorthand
// module.exports = {
//     x,
//     calculateSum
// };
// // exported from here