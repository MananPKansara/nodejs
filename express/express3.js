const express = require('express');
const app = express();

const path = require('path');
let dir = path.join(__dirname, "html");

app.get('', (req,res) => {
    res.sendFile(`${dir}/index.html`);
});

app.get('/help', (req,res) => {
    res.sendFile(`${dir}/help.html`);
});

app.get('/about', (req,res) => {
    res.sendFile(`${dir}/about.html`);
});

app.get('*', (req,res) => {
    res.sendFile(`${dir}/nopage.html`);
});

app.listen(8080);