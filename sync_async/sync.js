console.log("Syncronous");

var a = 1078678;
var b = 89879;

function multiplyFn(x,y){
    const res = a*b;
    return res;
}

var c = multiplyFn(a,b);

console.log("Sync result is: " , c);
