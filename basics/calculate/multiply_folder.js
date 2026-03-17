console.log("Mutiply file executed");

var x = "multiply calculation"
function calculateMultiply(a,b){
    return a*b;
}

// console.log(module.exports); // ouput --> {} empty object

module.exports = {
    x : x,
    calculateMultiply : calculateMultiply
};
