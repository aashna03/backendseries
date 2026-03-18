const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate executed"), 0);

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer Expired"), 0);
    process.nextTick(() => console.log("process.nextTick"))
    setImmediate(() => console.log("setImmediate executed"), 0);
    console.log("Last line inside fs");
});

process.nextTick(() => console.log("process.nextTick"))

console.log("Last line of the code file");


// output
// Last line of the code file
// process.nextTick
// Promise
// Timer Expired
// setImmediate executed
// Last line inside fs
// process.nextTick
// setImmediate executed
// 2nd Timer Expired