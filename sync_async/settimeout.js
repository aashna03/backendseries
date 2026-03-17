console.log("setTimeOut Program");

var a = 1078678;
var b = 89879;

// Async function - loaded to libuv - this will be called when the call stak is empty - after GEC is out of call stack
setTimeout(() => {
    console.log("call me right now");
    
}, 0) // Trust issues for setTimeOut
// once call stack of main thread is empty

// Async function
setTimeout(() => {
    console.log("call me after 3 secs");
    
}, 3000)

function multiplyFn(x,y){
    const res = a*b;
    return res;
}

var c = multiplyFn(a,b);

console.log("Settimeout result is: " , c);

// output
// setTimeOut Program
// Settimeout result is:  96950499962
// call me right now
// call me after 3 secs
