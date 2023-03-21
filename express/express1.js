const express = require('express');
const app = express();

// In Express, app.get() is a method that is used to define a route for a GET request in your application. 
// A route is a combination of an HTTP method and a URL pattern, which when matched by a request from a client, triggers a function to handle the request and send a response back to the client.

app.get('', (req, res) => {
    res.send([ {name : "Manan"} ]);
})

app.get('/about-us', (req,res) => {
    res.send('This is about us page');
})

app.get('/contact-us', (req,res) => {
    res.send('This is contact us page');
})

app.listen(8080);