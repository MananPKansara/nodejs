const express = require('express');
var app = express();

app.use('/', (req, res, next) => {
    console.log("This must be executed for all methods before get");
    next();
})

app.get('/', (req, res, next) => {
    console.log("Get method");
    res.end("Manan");
    next();
})

app.use('/', (req, res) => {
    console.log("This must be executed for all methods after get");
})

app.listen(8080);