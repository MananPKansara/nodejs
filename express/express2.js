const express = require('express');
let app = express();

const path = require('path');

let dir = path.join(__dirname, "html");

app.use(express.static(dir));

app.listen(8080);

// write files name of files in html folder after localhost and port with its exension to execute 
// but we can not hide file extension here