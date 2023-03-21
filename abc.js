const fs = require('fs');

// Create a file with initial data
fs.writeFile('data.txt', 'Initial data', (err) => {
  if (err) throw err;
  console.log('File created with initial data');
});

// Function to append data to the file
function appendData() {
  fs.appendFile('data.txt', ' - Updated data', (err) => {
    if (err) throw err;
    console.log('Data appended to the file');
  });
}

// Function to read the file data
function readData() {
  fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File data:', data);
  });
}

// Call the appendData function after a delay
setTimeout(appendData, 1000);

// Call the readData function immediately
readData();
