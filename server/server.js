const http = require("node:http");

// const server = http.createServer(); // this returns an instance of a server

// const server = http.createServer(function (req, res){
//     res.end("Hello Guys"); // the data we are sending finally
// }); 

const server = http.createServer(function (req, res){
    if(req.url === "/getSecretData"){
        res.end("There is no secret data")
    }
    res.end("Hello Guys"); 
}); 


server.listen(7777)
// here port number is 7777










