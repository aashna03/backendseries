console.log("Sum file executed");

export var x = "sum calculation"
export function calculateSum(a,b){
    return a+b;
}


// common JS module
// module.exports = {
//     x : x,
//     calculateSum : calculateSum
// };

// shorthand
// module.exports = {
//     x,
//     calculateSum
// };
// exported from here