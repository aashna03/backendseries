const crypto = require("crypto");

console.log("in blocking program");

var a = 1078678;
var b = 89879;

// Password Base Key Derivative Function 
// passwod -> the password
// salt-> this is the salt we need to give for encryption
// 500000 -> iterartions -> higher the iterations tougher the key and hard to decrypt
// 50 -> length of the key
// digest = sha512 -> algorithm 

// Sync func - donot use sync functions it blocks thread
// key generation is cpu intensive
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("First key is generated");


// Async func
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
    
})

setTimeout(() => {
    console.log("call me right now");
    
}, 0)

function multiplyFn(x,y){
    const res = a*b;
    return res;
}

var c = multiplyFn(56789,b);

console.log("Blocking result is: " , c);

// output:
// in blocking program
// First key is generated
// Blocking result is:  96950499962
// Second Key is generated

// output after application of settimeout
// in blocking program
// First key is generated
// Blocking result is:  96950499962
// call me right now
// Second Key is generated
