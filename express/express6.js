const express = require('express');
var app = express();

app.get('/', (req,res) => {
    
    // send response to client. we can use multiple write before end()
    // res.end("Xyz");

    // send response to client and set content type in header according to content
    // res.send("Abc"); 
    // res.send({name : "Manan"})

    // send response to client in json format and if response is not in json format then convert it into json if possible otherwise return error.
    // res.json({name : "Manan"});
    // res.json([1,2,3,4])
    // res.json("Manan");  

    // res.format is used to send resposnse in more than one format. client can access any of them contents.
    // res.format({
    //     'text/plain' : () => {
    //         res.send("text");
    //     },
    //     'text/html' : () => {
    //         res.send("<html>html</html>");
    //     },
    //     'application/json' : () => {
    //         res.send({ message : "This is JSON response" })
    //     },
    //     'default' : () => {
    //         res.status(406).send("Not Acceptable")
    //     }
    // })

    // res.set('Content-Type', 'application/json');
    // res.set('Content-Type', 'text/html'); // update res object - content-type property

    
    // res.append() is an Express method in Node.js that allows you to add a new value to an existing response header. 
    // This method is useful when you need to set a header that can have multiple values, such as the Set-Cookie header.
    // res.append('Link', '<http://example.com/page2>; rel="next"');
    // res.append('Link', '<http://example.com/page1>; rel="prev"');

    // use to set cookies in users browser
    // res.cookie('name', 'Manan');

    // res.status(404);

    // res.attachment('C:\Users\MANAN\Downloads\WhatsApp Image 2023-02-09 at 21.33.04.jpeg'); //sets Content-Disposition header
    // res.download('C:\Users\MANAN\Downloads\WhatsApp Image 2023-02-09 at 21.33.04.jpeg', 'boom');

    res.send("Manan");
    

})

app.listen(9000);