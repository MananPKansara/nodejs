// The enctype property specifies the encoding type of the form data, which can be one of three values:
// 1.application/x-www-form-urlencoded: This is the default encoding type for HTML forms. In this encoding, the values of form fields are concatenated with an ampersand (&) and submitted as a single string. This encoding type is suitable for most text-based form data.
// 2.multipart/form-data: This encoding type is used when the form includes one or more file inputs. In this encoding, each part of the form data (including files) is sent as a separate block of data, and each block has its own headers. This encoding type is suitable for sending binary data such as images or files.
// 3.text/plain: This encoding type is rarely used and sends the form data as plain text without any special encoding.

const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        console.log(file);
        cb(null, 'uploads')
    },
    filename : (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage:storage}).single('image');

app.post('/', upload, (req,res) => {    
    res.send("File sending");
})

app.listen(9000);