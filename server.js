//import express
let express = require('express');

// Create the Express app.
let app = express();

//Step 3 code goes here
//initialize file system module
// API endpoint to get list of songs


// Set the port used for server traffic.
let port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

//run server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
