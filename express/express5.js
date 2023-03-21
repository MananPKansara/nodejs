const express = require('express');
var app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }));

// In HTTP, the GET request method is not meant to have a request body.
// According to the HTTP specification (RFC 7231), the GET method "requests a representation of the specified resource", and "should not have a body".
// Express does not parse the body of GET requests by default.
app.get('/:id', (req,res) => { 
    console.log(req.params.id);
    res.write(req.method);
    res.end("Complete");
})

app.post('/', (req,res) => {
    console.log(req.body);
    let {name} = req.body[0];
    console.log(name);
    res.end();
})


app.listen(8080);