const express = require('express');
const app = express();

const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        switch(file.fieldname) 
        {
            case 'file1' : 
            cb(null, 'uploads1');
            break;

            case 'file2' : 
            cb(null, 'uploads2');
            break;
        }
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname) );
    }
})
let upload = multer({storage : storage}).fields( [ { name : "file1", maxCount : 1 }, { name : "file2", maxCount : 1} ] );

app.post('/', upload, (req, res) => {
    res.send("File taken")
})

app.listen(9000);