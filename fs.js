const fs = require('fs');

let open = fs.open('fs.txt', 'r', function(err, success){
    if(err)
    console.log(err);

    console.log(success);
    console.log("File opend successfully");
});

console.log(open);