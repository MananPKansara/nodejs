const express = require('express');
const app = express();

const fetch = require('node-fetch');

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

app.get('/', (req, res) => {
    res.send("Hi this is get request")
});

app.post('/', (req, res) => {
    res.send({
        name : "Manan",
        age : 20
    })
});

app.listen(3000);