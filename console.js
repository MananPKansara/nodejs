// The console module in Node.js is a built-in module that provides a simple debugging console that is similar to the console found in web browsers. It allows you to print messages to the console, track the execution of your code, and interact with the command line.

// The console module provides various methods for logging different types of information, such as console.log() for general logging, console.warn() for warnings, console.error() for errors, and console.info() for informative messages. You can also use console.dir() to display an object's properties and console.time() and console.timeEnd() to measure the time taken by a particular operation.

// The output of the Node.js console module can be seen in several places depending on the environment and tool you are using.
// 1.terminal or command prompt
// 2.IDE
// 3.Web browser
// 4.Log File: You can also redirect the console output to a log file using the console module's fs module

// if we create file and see in browser log by including it in html file then it will not ude node console module. becoze we write console.log(Buffer) in html file and view in browser the it will give error but in terminal that statement will display buffer object

// console.log("Manna");
// console.warn("Info");


/* const fs = require('fs');

let out = fs.createWriteStream('./console_file.txt');
let err = fs.createWriteStream('./console_file.txt');

const myObject = new console.Console(out, err);

console.log(myObject);

myObject.error("Abc"); */


/* console.count("Manan");
console.count("Manan");
console.count("acb");
console.count(); */

/* console.time("Abc");
for(let i=0; i<1000; i++);
console.timeEnd("Abc"); */


/* // console.assert(value, messages) : 
// Parameters: This method has two parameters as mentioned above and described below:
// value: This parameter specifies the value to be asserted.
// messages: It specifies the messages to be used as error messages. Any parameters passed along with value will be considered as message.
// Return Value: This method doesn’t return anything if the value is true. If failed to assert the value then Assertion failed is logged followed by an error message
console.assert(true, "error message 1");
console.assert(false, "error message 2"); */


/* let a = 10;
console.debug(a); */

/*
console.dir, on the other hand, is used to log an object in a way that shows its properties and methods. It will output the properties and their values in a tree-like structure that allows you to navigate and explore the object's structure. For example, you can use console.dir to log a DOM element:
let obj = {
    name : "Manan",
    age : function(){
        console.log("Display");
    }
}
console.dir(obj);
console.log(obj); */