const express = require('express'); 
// Import the Express framework for building web applications.

const app = express(); 
// Create an instance of the Express application.

const mongoose = require('mongoose'); 
// Import Mongoose to interact with MongoDB.

require('dotenv').config(); 
// Load environment variables from a .env file.

mongoose.connect("mongodb+srv://shoppingApp:kjypNZ36PQ0qfDmg@mongodb.ofjottv.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('Database connection established');
    // Log a success message when connected to MongoDB.
  })
  .catch((error) => {
    console.log(error);
    // Log the error if the connection fails.

    console.log('Error connecting to Mongo');
    // Log a custom error message for debugging.
  });

var taskRoute = require('./mainFolder/todoApp/taskRoutes'); 
// Import the task routes from the specified file.

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // Allow requests from any origin.

  res.header('Access-Control-Allow-Methods', '*');
  // Allow all HTTP methods (GET, POST, PUT, DELETE, etc.).

  res.header('Access-Control-Allow-Headers', '*');
  // Allow all headers in requests.

  next();
  // Move to the next middleware in the stack.
});

app.use(express.json()); 
// Parse incoming JSON requests and attach the data to req.body.

app.use('/todo', taskRoute); 
// Use the task routes for requests to the '/todo' endpoint.

app.use((req, res, next) => {
  const error = new Error('Not Found');  
  // Create an error object for unknown routes.

  error.status = 404; 
  // Set the HTTP status code to 404 (Not Found).

  next(error);
  // Pass the error object to the error-handling middleware.
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  // Set the HTTP response status to the error's status or 500 (Internal Server Error).

  res.json({
    error: {
      message: error.message                                                                                 
      // Send the error message in the response.
    }                                                                                   
  });                                                                                      
});

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
  // Start the server on port 3000 and log the message.
});

module.exports = app; 
// Export the app instance for potential reuse (e.g., in tests).
