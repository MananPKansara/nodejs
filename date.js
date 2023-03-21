let dob = new Date('1760-01-01');

let date = new Date();

let difference = date-dob;
console.log((new Date(difference).getFullYear())-1970);