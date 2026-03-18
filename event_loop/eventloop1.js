const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate executed"), 0);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File reading CB done");
});

setTimeout(() => console.log("Timer Expired"), 0);

function printA(){
    console.log("a=",a);
}

printA();
console.log("Last line of the code file");

// output:
// a= 100
// Last line of the code file
// Timer Expired
// setImmediate executed
// File reading CB done