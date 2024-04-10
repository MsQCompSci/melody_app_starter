//Import express
let express = require('express');

// Create the Express app
let app = express();

//Initialize file system module
let fs = require('fs');

// Set the port used for server traffic.
let port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

//Step 3 code goes here
//initialize file system module
// Serve static files from 'songs' directory
// Middleware for parsing JSON files
// API endpoint to get list of songs
//Get list of file names and parse as json object

//Run server at port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
