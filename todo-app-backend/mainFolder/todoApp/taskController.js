const taskModel = require('./taskModel'); // Import the Task model for database operations
const mongoose = require('mongoose'); // Import mongoose for MongoDB operations

// Controller to fetch all tasks
exports.getTasks = (req, res, next) => {
    // Find all tasks in the database
    taskModel.find()
        .then((tasks) => {
            // Return the list of tasks if successful
            res.status(200).json(tasks); // Send the tasks with a status code 200
        })
        .catch((err) => {
            // If there's an error, return a failure response
            res.status(500).json({
                error: err, // Include error details
                msg: 'Failed to fetch tasks.', // Message indicating failure
            });
        });
};

// Controller to fetch a specific task by ID
exports.getTaskById = (req, res, next) => {
    const taskId = req.params.id; // Get the task ID from request parameters

    // Find the task by its ID in the database
    taskModel.findById(taskId)
        .then((task) => {
            if (task) {
                // Return the task details if found
                res.status(200).json(task); // Send the task with a status code 200
            } else {
                // If no task is found, return a 404 response
                res.status(404).json({
                    msg: 'Task not found.', // Message indicating the task was not found
                });
            }
        })
        .catch((err) => {
            // Handle any errors during the database query
            res.status(500).json({
                error: err, // Include error details
                msg: 'Failed to retrieve task.', // Message indicating failure
            });
        });
};

// Controller to create a new task
exports.createTask = (req, res, next) => {
    // Destructure the necessary fields from the request body
    const { title, description, isCompleted, assignedTo, status, dueDate, priority, comments } = req.body;

    // Create a new task using the provided data
    const task = new taskModel({
        title, description, isCompleted, assignedTo, status, dueDate, priority, comments
    });

    // Save the new task to the database
    task.save()
        .then((result) => {
            // If successful, send the created task and a success message
            res.status(201).json({
                msg: 'Task created successfully.',
                task: result, // Include the created task in the response
            });
        })
        .catch((err) => {
            // If there's an error, send a failure response
            res.status(400).json({
                error: err, // Include error details
                msg: 'Failed to create task.', // Message indicating failure
            });
        });
};

// Controller to update an existing task by ID
exports.updateTask = (req, res, next) => {
    // Find the task by ID and update it with the new data from the request body
    taskModel.findByIdAndUpdate(
        req.params.id, // The ID of the task to be updated (from the URL params)
        {
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted,
            assignedTo: req.body.assignedTo,
            status: req.body.status,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            comments: req.body.comments
        },
        { new: true } // Option to return the updated task instead of the original
    )
        .then((result) => {
            // If successful, return the updated task and a success message
            res.status(200).json({
                msg: 'Task updated successfully.',
                task: result, // Include the updated task in the response
            });
        })
        .catch((err) => {
            // If the task is not found or there's another error, send a failure response
            res.status(404).json({
                error: err, // Include error details
                msg: 'Failed to update task. Task not found.', // Message indicating failure
            });
        });
};

// Controller to delete a task by ID
exports.deleteTask = (req, res, next) => {
    // Find the task by ID and delete it from the database
    taskModel.findByIdAndDelete(req.params.id)
        .then(() => {
            // If successful, send a success message indicating the task was deleted
            res.status(200).json({
                msg: 'Task deleted successfully.',
            });
        })
        .catch((err) => {
            // If the task is not found or there's another error, send a failure response
            res.status(404).json({
                error: err, // Include error details
                msg: 'Failed to delete task. Task not found.', // Message indicating failure
            });
        });
};
