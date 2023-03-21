const dns = require('dns');

// console.log(dns);


// A name server (also known as a DNS server) is a computer server that is responsible for translating human-readable domain names into their corresponding IP addresses, and vice versa. 
// When a user types a domain name into a web browser or other application, the application sends a query to a name server to find the IP address associated with that domain name. The name server then responds with the IP address, which allows the application to connect to the correct server.
// In addition to translating domain names into IP addresses, name servers can also provide other information about a domain, such as mail server addresses or other DNS records. 
// Here are some examples of the types of information that a name server can provide:
// 1. IP address
// 2. mail server information
// 3. other DNS record : a name server might store A (Address) records that map different subdomains to different IP addresses, or TXT (Text) records that provide additional information about the domain.
// 4.reverse DNS lookup

/* 
// give ip address from url
// The process of translating a domain name into an IP address is known as a DNS lookup, 
dns.lookup("bigscal.com",(err, address, family) => {
    console.log(err,address,family);
})

dns.lookup("bigscal.com", { all : true } ,(err, address, family) => {
    console.log(err,address,family);
}) 
*/

/* 
// give url from ip address(reverse lookup)
let address = "104.26.1.27";
dns.reverse(address, function(err, hostname){
    console.log(hostname);
})  
*/

// to get current server
// let res = dns.getServers();

// dns.resolve('bigscal.com', 'A', (err,records) => {
//     console.log(records);
// })

// dns.resolve('bigscal.com', 'AAAA', (err,records) => {
//     console.log(records);
// })

// MX - mail server
// Mail Exchange (MX) records are a type of DNS record that is used to specify the mail servers that should be used to handle incoming email for a particular domain. 
// An MX record contains a priority value and a hostname for each mail server, which allows the sending mail server to determine the order in which it should try to deliver the email.
// Mail server is responsible for handling email for a given website domain
dns.resolve('bigscal.com', 'MX', (err,records) => {
    console.log(records);
})

// dns.resolve('bigscal.com', 'NS', (err,records) => {
//     console.log(records);
// })

// dns.resolve('bigscal.com', 'SRV', (err,records) => {
//     console.log(records);
// })