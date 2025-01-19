// Import the 'http' module from Node.js to create an HTTP server
const http = require('http');

// Import the application logic from the 'app.js' file
const app = require('./app');

// Set the port for the server to listen on, using an environment variable if available, or default to 3000
const port = process.constrainedMemory.PORT || 3000;

// Create an HTTP server using the imported application (app.js)
const server = http.createServer(app);

// Start the server and make it listen on the specified port
server.listen(port);
