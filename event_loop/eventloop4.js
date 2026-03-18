const fs = require("fs");

setImmediate(() => console.log("setImmediate executed"), 0);

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File reading CB done");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("nextTick");
});

console.log("Last line of the code file");

// output

// Last line of the code file
// nextTick
// inner nextTick
// Promise
// Timer Expired
// setImmediate executed
// File reading CB done
