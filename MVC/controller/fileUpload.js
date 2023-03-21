const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        let fileName = Date.now() + path.extname(file.originalname);
        cb(null, fileName);
        req.body.image = fileName;
    }
})

let uploads = multer({ storage : storage }).single('image');

module.exports = uploads;