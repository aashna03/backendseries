const fs = require("fs");
const https = require("https");

console.log("Async Program");

var a = 1078678;
var b = 89879;

// // Sync function - this will block the main thread
// fs.readFileSync("./file.txt", "utf8");

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data successfully");
    
});

setTimeout(() => {
    console.log("setTimeOut called after 5 seconds");
    
}, 5000);

// Async function
fs.readFile("./file.txt", "utf8", (err, data) => {
    console.log("File Data : ", data);
});


function multiplyFn(x,y){
    const res = a*b;
    return res;
}

var c = multiplyFn(a,b);

console.log("Sync result is: " , c);

// output
// Async Program
// Sync result is:  96950499962
// File Data :  This is the file data
// Fetched data successfully
// setTimeOut called after 5 seconds

// sequence depends on
// according to file size, data size