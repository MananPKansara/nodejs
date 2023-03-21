const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        console.log(file);
        console.log(file + "file che");
        cb(null, 'uploads/');
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage : storage});

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/form.html');
})

app.post('/', upload.array('files'),(req, res) => {
    res.send("File uploaded.");
})

app.listen(8000);