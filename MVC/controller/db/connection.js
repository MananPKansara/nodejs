const mongoose = require('mongoose');
require('dotenv').config();
let url = "mongodb+srv://Manan:Manan@manan.dflg9s3.mongodb.net/mvc?retryWrites=true&w=majority";

(async () => {
    await mongoose.connect(url);
    console.log("Connection done");
})();

