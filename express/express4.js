const express = require('express');
const app = express();

app.get('/', (req,res) => {
    // res.write(JSON.stringify(req.headers));
    res.end(JSON.stringify(req.headers));

    res.setHeader('Content-Type', 'application/json'); 
    res.setHeader('Cache-Control', 'no-cache');

});

let server = app.listen(8080, () => {
    console.log(server.address());
    console.log(server.address().address);
    console.log(server.address().port);
});