const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  mongoose.connect('mongodb+srv://Manan:Manan@manan.dflg9s3.mongodb.net/?retryWrites=true&w=majority').then(res => console.log(res)).catch(err => console.log(err));  
}