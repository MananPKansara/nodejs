const url = require('url');

const myurl = "https://www.example.com/path?query=value#fragment";

// create object directly
// const manan = new URL("https://www.example.com/path?query=value#fragment");
// console.log(manan);

// parsing url
const parsedurl = url.parse(myurl);
console.log(parsedurl);

// constructing url
const option = {
    protocol : "https",
    hostname : "www.instagram.com",
    pathname : "manan_kansara_"
}
console.log(url.format(option));

// In a URL, the hash component (also known as the "fragment identifier") is used to identify a specific section within a document that is being referred to by the URL.
console.log((new URL("https://www.example.com/path?query=value#fragment")).hash);

console.log((new URL("https://user:password@example.com/path/to/resource")).username);
console.log((new URL("https://user:password@example.com/path/to/resource")).password);
