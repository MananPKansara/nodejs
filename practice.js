const express = require('express');
const app = express();

const fs = require('fs');
let data = JSON.parse(fs.readFileSync('data.json'));
let temp = data[0];

app.get('', (req, res) => {
    if(req.query)
    {
        let fullname = req.query.fname + req.query.lname;   
        let record = data.find((elem) => (elem.name.first+elem.name.last) == fullname);
        if(!record)
        {
            res.send("<h1>Person Not Found!</h1>");
        }
        res.send(`
        <img src="${record.picture.large}">
        <h3>Name : ${record.name.first} ${record.name.last}</h3>
        <h3>Contact : ${record.phone}</h3>
        `);
    }
    else{
        res.send();
    }
});

app.listen(8080);