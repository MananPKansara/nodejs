// Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle. 
// Middleware gets executed after the server receives the request and before the controller actions send the response. 
// Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.
// Middleware can be chained from one to another, Hence creating a chain of functions that are executed in order. 
// The last function sends the response back to the browser. 
// So, before sending the response back to the browser the different middleware process the request.
// The next() function in the express is responsible for calling the next middleware function if there is one.
// Modified requests will be available to each middleware via the next function 

const express = require('express');
var app = express();

app.get('/', (req, res, next) => {
    console.log("Hi");
    next();
},
(req, res, next) => {
    res.write("Hello");
    next();
},
(req, res, next) => {
    res.end("Manan");
    next();
}
)

app.listen(8080);