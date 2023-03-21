// application get raw data(binary data) from server and also send raw data to server.
// buffer is used to get and send data chunk by chunk

/* console.log(Buffer.alloc(10)); // create uninitiated buffer 
console.log(Buffer.from([1,2,3])); // create buffer with given content
console.log(Buffer.from("Manan")); */

/* let buffer = new Buffer.alloc(10);
buffer.write("MananKansaraAbc");
console.log(buffer); */

/* let buffer = new Buffer.alloc(10);
buffer.write("Manan", 3, 4);
console.log(buffer);
buffer.write("Manan");
console.log(buffer); */

/* let buffer = Buffer.from("Manan Kansara");
console.log(buffer);
console.log(buffer.toString('utf-8',1,7)); */

// console.log(Buffer.from("Manan").write("Manan Kansara")); // 5 as it returns buffer length

/*
// buffer.copy( target, targetStart, sourceStart, sourceEnd ) 
let buffer1 = Buffer.from("Manan");
let buffer2 = Buffer.from("abc");
buffer2.copy(buffer1, 2, 0, 2); // copy from buffer2 to buffer1 
// This method returns the number that indicates the number of bytes copied.
console.log(buffer1.toString());
console.log(buffer2.toString()); */

/* let buffer = Buffer.from("Manan");
console.log(buffer[0]);
console.log(buffer[0].toString()); //can not get char from the buffer index
console.log(buffer[0] = 22); // assigning value to buffer index manually
console.log(buffer[0]);
console.log(buffer.toString()); */

/* // buffer.includes( value, byteOffset, encoding );
let buffer = Buffer.from("MananKansara");
console.log(buffer.includes('an',7)); */

let buffer1 = Buffer.from("Manan");
let buffer2 = Buffer.from("Manan");
console.log(buffer1.compare(buffer2));
buffer1 = Buffer.from("Mana");
console.log(buffer1.compare(buffer2));

