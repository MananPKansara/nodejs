const https = require('https');

// The https.get() method makes a GET request to the specified URL and returns a http.IncomingMessage object.
https.get("https://www.bigscal.com", res => {
    // console.log(res);
    console.log(res.headers);
})

console.log(https.Agent());

