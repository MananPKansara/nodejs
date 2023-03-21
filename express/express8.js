const express = require('express');
const app = express();

app.route('/')
    .get((req,res) => {
        res.end();
        console.log("Get from home");
    })
    .post((req,res) => {
        res.end();
        console.log("Post from home");
    })

app.route('/about')
    .all((req,res,next) => {
        console.log("This will be execcuted for all type of request on about page");
        next();
    })
    .get((req,res) => {
        res.end();
        console.log("Get from about");
    })
    .post((req,res) => {
        res.end();
        console.log("Post from about");
    })

app.listen(8080, (err) => {
    if(err) return console.log(err);
    console.log("Listening to port 8080");
})