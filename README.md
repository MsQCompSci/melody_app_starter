# Starter Code for Get Started with Node.js & p5.js
Starter code to set up a p5.js project to route HTTP GET requests using Node.js in the [Getting Started with Node.js tutorial](https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit?usp=sharing). It this tutorial, you set up the enviernment for GET requests to read file names from a local folder called <code> songs </code>, and parses them into a JSON array. 

## Before you begin
Ensure that you have p5.js installed on your machine or are using the p5.vscode extension in VS Code. See [Setting Up Your Enviernment (https://docs.google.com/document/d/12AAGiuV1hS2BGacyQdFX6hH4FjrhbVGG7oJ7XYSQHbE/edit#heading=h.o2otuvhzi85u) for more details on how to download and create p5.js projects on your local device using VS Code. 

## About the Starter Code
This starter code contains a directory called <code>melody_app_starter-main</code> with 2 folders and 2 files. - The <code>public</code> folder holds all the main files to run a p5.js project as seen on the [p5.js Web Editor](https://editor.p5js.org/).
- The <code>songs</code> folder holds JSON files that we will retrieve.
- The <code>README.md/code> file is the file with these instructions
- The <code>server.js</code> file contains the Node.js and Express.js functions that create the routing enviernment for HTTP requests.

### Code in the <code>server.js</code> file:

<code>
//Import express
let express = require('express');

// Create the Express app
let app = express();

// Set the port used for server traffic.
let port = 3000;

// Middleware to serve static files from 'public' directory
app.use(express.static('public'));

//Run server at port
app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
</code>

The code in the <code>server.js</code> file creates the enviernment to enable HTTP requests in p5.js using Node.js and Express.js.
- The <code> require </code> function is a built-in Node.js function used to import modules. Here the Express.js module is imported with the argument <code>'express'</code>, and stored in the variable called <code> express </code>.
- The <code> express() </code> function creates an instance of an Express.js application object. Here the application is stored in the variable called <code> app </code>. We use <code> app </code> to call methods for routing and configuring HTTP requests.
- A global variable called <code> port </code> stores a value of 3000 and is used in <code> app.listen()</code> at the bottom.
- The <code> app.use(express.static('public')) </code> mounts the middleware to access the <code>public</code> folder from your current directory. This enables the p5.js project to run in the browser using the main files <code>index.html</code>, <code>style.css</code>  and <code>script.js</code> files. 
- The code that begins with <code>app.listen(port, () => {...</code> starts the server and makes it listen for incoming requests on the specified <code>port</code>. After the server starts this message appears in the terminal: <code>Server running at http://localhost:3000</code>

The server is running and canbe accessed at the specific url: [http://localhost:3000](http://localhost:3000)

# Next Steps:
1. Complete the [Getting Started with Node.js tutorial](https://docs.google.com/document/d/1n6Je0Lzht2ibQmN1st1ccth47ppNhIYtMBTOwNAAFdo/edit?usp=sharing)
2. Complete the [Melody App tutorial](https://docs.google.com/document/d/1mzJv-7qU1_CmkWI0ZFeqf3CeBfpOOVIrvPRZtxqFxRI/edit?usp=sharing)

# Errors?
Please reach out to msqscience91@gmail.com if you encounter any errors in code or documentation
