const mongoose = require('mongoose');

// Define the structure of the Task document (schema)
const taskSchema = new mongoose.Schema({
    title: {  // Define the 'title' field
        type: String,  // 'title' will be a string
        required: true,  // This field must be provided (cannot be empty)
    },
    description: {  // Define the 'description' field
        type: String,  // 'description' will be a string
    },
    isCompleted: {  // Define the 'isCompleted' field
        type: Boolean,  // 'isCompleted' will be a boolean (true or false)
        default: false,  // Default value is false, meaning the task is not completed by default
    },
    assignedTo: {  // Define the 'assignedTo' field
        type: String,  // 'assignedTo' will be a string (e.g., username or employee name)
        required: true,  // This field must be provided
    },
    status: {  // Define the 'status' field
        type: String,  // 'status' will be a string (e.g., "in-progress", "completed")
        default: 'pending',  // Default value is 'pending'
    },
    dueDate: {  // Define the 'dueDate' field
        type: Date,  // 'dueDate' will store a date value
    },
    priority: {  // Define the 'priority' field
        type: String,  // 'priority' will be a string (e.g., "low", "medium", "high")
        default: 'medium',  // Default value is 'medium'
    },
    comments: {  // Define the 'comments' field
        type: [String],  // 'comments' will be an array of strings (multiple comments allowed)
        default: [],  // Default is an empty array
    },
});

// Export the model so it can be used in other files
module.exports = mongoose.model('Task', taskSchema);
