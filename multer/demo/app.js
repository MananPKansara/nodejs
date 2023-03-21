const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const multer = require('multer');
const joi = require('joi');
const fs = require('fs');
const ejs = require('ejs');

app.set('view engine', 'ejs');

const schema = joi.object({
    firstname: joi.string().pattern(new RegExp('^[a-zA-Z]+$')).min(3).max(20).required(),
    lastname: joi.string().pattern(new RegExp('^[a-zA-Z]+$')).min(3).max(20).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
    phone: joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
    company: joi.string().alphanum().min(2).max(40).required(),
})

var name = '';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(file);
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        name = Date.now() + path.extname(file.originalname);
        cb(null, name);
    }
})

const upload = multer({ storage: storage }).any();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', upload, async (req, res) => {
    console.log("Name is c"+name);
    if (name) {
        let value = "";
        try {
            value = await schema.validateAsync(req.body);
        } catch (err) {
            res.send('<script>alert("Enter proper data")</script>');
        }

        let data = fs.readFileSync('data.json','utf-8');
        let id = 1;
        if(data)
        {
            data = JSON.parse(data)
            id = data.reduce((acc, elem) => {
                if(elem.id > acc)
                acc = elem.id
                return acc;
            },data[0].id)
            id++;
        }
        else 
        data = [];
    
        console.log(value);
        value.id = id;
        value.image = "uploads/" + name;
        data.push(value);
        console.log(data);
        res.send("Data inserted");

        fs.writeFileSync('data.json',JSON.stringify(data));

    }else{
        res.send("File is not uploaded")
    }
})

app.get('/display', (req, res) => {
    let fetch = JSON.parse(fs.readFileSync('data.json','utf-8'));
    console.log(fetch);
    
    res.render('list', { 'data' : fetch });
})

app.listen(8000);