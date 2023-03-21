// fs.readFile is a method that reads the entire contents of a file into memory as a Buffer or a string, depending on the encoding specified. It is a simple and straightforward way to read the contents of a file.
// fs.createReadStream reads the file in chunks, so it is more memory-efficient and faster than fs.readFile for large files.

const { createWriteStream, createReadStream } = require('fs');

/* // ###### Problem #####
const writeStream = createWriteStream('writeStream.txt');
writeStream.write("Manan Kansara. ");
writeStream.end("Done writing");

const readStream = createReadStream('writeStream.txt');

readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
  

readStream.on('end', () => {
    console.log("Ending readng stream.");
}) 
// The reason why you cannot read the file in the code you provided is that you are trying to read the file immediately after writing to it. However, the file writing operation may not have completed by the time you start reading the file, especially for large files.
// In other words, the writeStream.end() method does not guarantee that all the data has been written to the file by the time it returns. Therefore, you need to wait for the writeStream to finish writing the data to the file before you can start reading it.
 */


/* const writeStream = createWriteStream('writeStream.txt');
writeStream.write("Manan Kansara.");
writeStream.end("End writing.");

writeStream.on('finish', () => {

    console.log("Finish writing and started reading.");
    const readStream = createReadStream('writeStream.txt');

    readStream.on('data', chunk => {
        console.log(chunk.toString());
    })

    readStream.on('end', () => {
        console.log("End reading stream");
    })
}) */



/* 
// In the Node.js fs module, pipe is a method that can be used to transfer data between readable and writable streams. The pipe method is a powerful and efficient way to handle streaming data, especially when dealing with large amounts of data.
// When you call the pipe method on a readable stream, it transfers the data from the readable stream to the writable stream. This allows you to easily and efficiently transfer data from one stream to another without having to manually handle the reading and writing of data.

const readStream = createReadStream('writeStream.txt');
const writeStream = createWriteStream('destStream.txt');

readStream.pipe(writeStream); */

const readStream = createReadStream('writeStream.txt');
const writeStream = createWriteStream('destStream.txt');

const stream = require('stream');

const update = new stream.Transform({
    transform(chunk,enc,cb){
        cb(null,chunk.toString().toLowerCase())
    }
})

readStream.pipe(update).pipe(writeStream); 
