const http = require('http');
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data.json');

let data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
 
http.createServer(function(req,res){
    res.setHeader('Content-Tyepe', 'application/json')
    switch(req.url)
    {
        case '/full_names' : 
            console.log("Full names : ");
            let result = data.map(element => {
                return {   "title": element.name.title,
                "first": element.name.first,
                "last": element.name.last };    
            });
            res.write(JSON.stringify(result));
            break;
        case '/info' : 
            console.log("Information");
            res.write(JSON.stringify(data))
            break;
        default : console.log("404 Not found");
    }
    res.end();
}).listen(8080);

