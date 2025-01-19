// Import the express module to use its functionality
const express = require('express');
// Create a router object that will handle different routes
const router = express.Router();

// Import the controller that handles task-related logic
const taskController = require('./taskController');

// Define a route for GET request to fetch all tasks
router.get('/getTasks', taskController.getTasks);  // When '/getTasks' is requested, call the getTasks function from the controller

// Route to retrieve a specific task by ID
router.get('/getTask/:id', taskController.getTaskById);

// Define a route for POST request to add a new task
router.post('/addTask', taskController.createTask);  // When '/addTask' is requested, call the createTask function from the controller

// Define a route for PUT request to update a task by ID
router.put('/editTask/:id', taskController.updateTask);  // When '/editTask/:id' is requested, call the updateTask function with task ID

// Define a route for DELETE request to delete a task by ID
router.delete('/deleteTask/:id', taskController.deleteTask);  // When '/deleteTask/:id' is requested, call the deleteTask function with task ID

// Export the router to be used in other files (like app.js)
module.exports = router;
