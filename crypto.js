// The main difference between HMAC-SHA and SHA (Secure Hash Algorithm) is that HMAC-SHA is a message authentication code (MAC) algorithm that uses SHA as the underlying hash function, while SHA is a stand-alone hash function.

const crypto = require('crypto');

// console.log(crypto.checkPrimeSync(6n));

/* const hash = crypto.createHash('sha256').update("Manan").digest('hex');
console.log(hash);

const hmac = crypto.createHmac('sha256', 'abcdef').update("Manan").digest('hex');
console.log(hmac); */

// The scryptSync function is a part of the crypto module in Node.js, which provides cryptographic functionality, including encryption, decryption, and key generation.
// The scryptSync function is a synchronous version of the scrypt key derivation function, which is used to derive a fixed-length key from a variable-length password and a salt value.
// In cryptography, salt is a random data that is added to the input of a cryptographic function to help protect against certain types of attacks, such as dictionary attacks and pre-computed attacks.
// For example, suppose the password "password123" is stored in a database without a salt, and an attacker gains access to the database. The attacker can simply hash "password123" using SHA-256 and then compare the resulting hash to the hashes in the database to find a match. However, if a random salt value is added to "password123" before hashing it, the resulting hash will be different, making it much harder for the attacker to guess the password.
// Functions in cryptography often return buffers instead of normal strings because buffers provide better security and are more efficient for certain operations.
// Buffers are similar to strings, but they are mutable and can be modified in place. This means that they can be used to store binary data, which is important in cryptography because many cryptographic operations require working with binary data. Buffers also provide additional security because they can be zeroed out in memory after they are used, preventing sensitive data from being left in memory where it could be accessed by an attacker.
// console.log(crypto.scryptSync('Manan Kansara', "salt",24).toString());



/* // The createCipher() method in Node.js crypto module creates and returns a new Cipher object, which can be used to encrypt data. The update() method is called on this Cipher object to encrypt the data.
// The update() method of the Cipher object is used to encrypt a chunk of data and returns the encrypted data as a Buffer object. The Buffer object contains the encrypted data in binary format. If there is no more data to encrypt, the final() method of the Cipher object should be called to finalize the encryption and return the final encrypted data as a Buffer object.
const cipher = crypto.createCipheriv('aes-192-cbc',crypto.scryptSync("manan",'salt',24), crypto.scryptSync("manan",'salt',16));
let enc = cipher.update("manan kansara");
enc+=cipher.final('base64');
console.log(enc);

const dcipher = crypto.createDecipheriv('aes-192-cbc',crypto.scryptSync("manan",'salt',24), crypto.scryptSync("manan",'salt',16));
let dec  = dcipher.update(enc,'base64');
dec += dcipher.final();
console.log(dec); */

// console.log(crypto.randomBytes(32).toString());
// console.log(crypto.randomFillSync(Buffer.from("abc")).toString('utf-8')); // to generate buffer values randomly


