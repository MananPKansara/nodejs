// If you do not provide a storage engine using multer.diskStorage, multer will use the default in-memory storage engine, which is not suitable for handling large files and can cause your application to run out of memory.
// When using the default in-memory storage engine, multer stores the uploaded file in memory as a Buffer object. This can work fine for small files, but for larger files, it can quickly consume a lot of memory and cause your application to crash.
// Therefore, it is recommended to use multer.diskStorage to specify a disk storage engine for storing uploaded files on the server's file system. This allows multer to stream the uploaded file directly to disk, which is more efficient and can handle much larger files than the default in-memory storage engine.
// By using multer.diskStorage, you can also control the directory and filename of the uploaded file, which gives you more flexibility in how you organize and manage uploaded files on your server.

const express = require('express');
const app = express();

const ejs = require('ejs');

app.set('view engine', 'ejs');

const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) =>  {
        cb(null, 'uploads')
    },
    filename : (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage : storage}).single('image');

app.post('/', (req,res) => {
    upload(req, res, (err) => {
        res.send('<img src="file:///C:/Users/MANAN/Desktop/dp.jpg"width=300/>')
        // res.download("uploads/1677843910266.pdf");
    })
})

app.get('/', (req,res) => {
    res.render('index');
})

app.listen(8000);