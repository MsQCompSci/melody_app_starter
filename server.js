//import express
let express = require('express');

// Create the Express app.
let app = express();

// Set the port used for server traffic.
let port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

//run server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});