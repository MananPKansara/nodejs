let fs = require("fs");

/* fs.mkdir('fileSync', function(){
    console.log("Folder created");
}) */


fs.writeFile('fileSync/index.txt', "writing file", function(){
    console.log("Writing done");
})

fs.appendFile('fileSync/index.txt', 'Appenf done', function(){
    console.log("Appenf done");
} )

// fs.readFile('fileSync/index.txt', function(res){
//     console.log(res);
// })

/* fs.truncate('fileSync/index.txt', 10, function(){
    console.log("Truncated");
}) */