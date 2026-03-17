// S1 E3

// console.log(global) //similar to window on browser
// console.log(typeof global)
// console.log(globalThis)
// console.log(global === globalThis);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// S1 E4

// require('./xyz.js') 

// ===================================================

// require('./sum.js')

// var a = 11
// var b = 2

// calculateSum(a,b) // this will not work give error
// Sum file executed message got printed but not able to call calculateSum function
// modules are protected by default they protect variables and functions from leaking

// ====================================================

// // import it here
// const calculateSum1 = require('./sum1.js')

// var a1 = 11
// var b1 = 2

// console.log(calculateSum1(a1,b1))

// ====================================

// // import the object here
// const obj = require('./sum2.js')

// var a2 = 11
// var b2 = 2

// console.log(obj.calculateSum(a1,b2))
// ====================================================

// // destructuring
// // import the object here
// const {x, calculateSum} = require('./sum2.js')
// // or without js extension same 
// // const {x, calculateSum} = require('./sum2')

// // write x and calculateSum as same names

// p = 99 // ok in ES module
// var a3 = 11
// var b3 = 2

// console.log(x)
// console.log(calculateSum(a3,b3))

// ==========================================================

// // ES module type import

// // destructuring
// // import the object here
// // const {x, calculateSum} = require('./sum2.js')
// // using import statement for es module
// import {x, calculateSum} from "./sum3_esmod.js"
// // here removing extension .js won't work

// // write x and calculateSum as same names

// // p = 10 // this gives error 
// var a4 = 11
// var b4 = 2

// console.log(x)
// console.log(calculateSum(a4,b4))

// ==========================================================


// // // module in folder structure
// // const {x, calculateSum} = require('./calculate/sum_folder.js')
// // const {calculateMultiply} = require('./calculate/multiply_folder.js')
// // or ----
// // const {x, calculateSum, calculateMultiply} = require('./calculate/index.js')
// const {x, calculateSum, calculateMultiply} = require('./calculate')
// // here index is taken care of here 


// var a4 = 11
// var b4 = 2

// console.log(x);
// console.log(calculateSum(a4,b4));
// console.log(calculateMultiply(a4, b4));

// ===================================================
// // import data from json
// const data = require("./data.json")

// console.log(data);

// ====================================================
// // using utils
// const util = require("node:util")

// +++++++++++++++++++++++++++++++++++++++++++++++