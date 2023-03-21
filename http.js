const http = require('http');
const fs = require('fs');
const url = require('url');


http.createServer( async(req,res) => {
    
    let data;
    let temp;
    let query;
    let id;
    let entry;
    let index;

    // get data from API
    let fileData = fs.readFileSync('data2.json','utf-8');
    if(fileData)
    data = JSON.parse(fileData);
    else
    data = [];
    console.log(data);
    
    switch(req.method)
    {
        case 'GET' : 
            // console.log(req.client._httpMessage._header); // tp get headers in original format

            // get id to search
            id = url.parse(req.url, true).query.id;

            entry = data.find( elem => elem.id == id );
            if(entry)
            {
                res.write(JSON.stringify(entry));
            }
            else
            {
                res.write("User not found");
            }

            break;       

        case 'POST' : 

            temp = "";
            // get post data from reqest body
            await req.on('data', chunk => {
                temp += chunk.toString();
            })
            query = JSON.parse(temp);


            // validate and add entry to API
            if(data.find(elem => elem.name == query.name))
            {
                res.write("User already exist");
            }
            else if((!query.name) || (!query.age))
            {
                res.write("Name or age is blank");
            }
            else if(isNaN(query.age))
            {
                res.write("Age must be in number");
            }
            else if(typeof query.name != 'string')
            {
                console.log(typeof query.name);
                res.write("Name must be in string");
            }
            else
            {
                id = (data[data.length-1]?.id) ? data[data.length-1].id : 0;

                // add entry
                data.push( { id : id + 1 , name : query.name, age : query.age} )
                fs.writeFileSync('data2.json', JSON.stringify(data));
                res.write("Add thae");
            }
            
            break;

        case 'PUT' :

            temp = "";
            await req.on('data', chunk => {
                temp += chunk.toString();
            });
            query = JSON.parse(temp);

            index = data.findIndex(elem => elem.name == query.name)

            data[index] = { id : data[index].id, name : query.name, age : query.age };
            console.log(data);

            fs.writeFileSync('data2.json', JSON.stringify(data));

            break;

        case 'DELETE' : 

            id = url.parse(req.url, true).query.id;

            if(id==undefined)
            res.write("Enter id from url to delete element");

            index = data.findIndex(elem => elem.id == id)

            if(index>0 || index<data.length)
            {
                data = data.slice(0,index).concat(data.slice(index+1));
            }
            else
            {
                res.write("User not exist");
            }

            fs.writeFileSync('data2.json', JSON.stringify(data));

            break;
            
        default : 
            req.write("Invaid request type");
    }

    res.end();

}).listen(9000);

