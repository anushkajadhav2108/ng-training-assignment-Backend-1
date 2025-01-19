// Importing required modules for testing
const chai = require('chai');  // Chai is used for assertions
const chaiHttp = require('chai-http');  // Chai HTTP is used to make HTTP requests
const server = require('../server');  // Import the server file where the API is running

// Use Chai HTTP plugin
chai.use(chaiHttp);

// Destructure `expect` from Chai for assertions
const { expect } = chai;

describe('Task API', () => {  // Describe the test suite for Task API

    // Test to retrieve all tasks
    it('should retrieve all tasks', (done) => {  
        // Make a GET request to '/api/tasks' endpoint
        chai.request(server)
            .get('/api/tasks')  // The endpoint we're testing
            .end((err, res) => {  // Callback function when the request completes
                expect(res).to.have.status(200);  // Assert the response status is 200 (OK)
                expect(res.body).to.be.an('array');  // Assert the response body is an array
                done();  // End the test after assertion
            });
    });

    // Test to create a new task
    it('should create a new task', (done) => {  
        // Create sample data for the task to be created
        const taskData = {
            title: 'Test Task',  // Task title
            description: 'This is a test task',  // Task description
            assignedTo: 'Anushka Jadhav',  // Person assigned to the task
            status: 'Pending',  // Current status of the task
            dueDate: '2025-01-25',  // Task due date
            priority: 'High',  // Task priority level
            comments: 'Test comment',  // Any comments related to the task
        };

        // Make a POST request to '/api/tasks' to create a new task
        chai.request(server)
            .post('/api/tasks')  // The endpoint for creating a task
            .send(taskData)  // Send the task data in the request body
            .end((err, res) => {  // Callback function when the request completes
                expect(res).to.have.status(201);  // Assert the response status is 201 (Created)
                expect(res.body).to.have.property('task');  // Assert that the response body contains the created task
                done();  // End the test after assertion
            });
    });

    // Test to update a task by its ID
    it('should update a task by ID', (done) => {
        // Create updated data for the task
        const updatedData = {
            title: 'Updated Task',  // New task title
            description: 'This is an updated task',  // New task description
        };

        const taskId = '60c72b2f5f1b2c001c8a0a3c';  // Example task ID for updating the task

        // Make a PUT request to update the task by its ID
        chai.request(server)
            .put(`/api/tasks/${taskId}`)  // The endpoint for updating a task by ID
            .send(updatedData)  // Send the updated task data
            .end((err, res) => {  // Callback function when the request completes
                expect(res).to.have.status(200);  // Assert the response status is 200 (OK)
                expect(res.body).to.have.property('task');  // Assert that the response body contains the updated task
                expect(res.body.task.title).to.equal('Updated Task');  // Assert the task title was updated correctly
                done();  // End the test after assertion
            });
    });

    // Test to delete a task by its ID
    it('should delete a task by ID', (done) => {
        const taskId = '60c72b2f5f1b2c001c8a0a3c';  // Example task ID for deleting the task

        // Make a DELETE request to remove the task by its ID
        chai.request(server)
            .delete(`/api/tasks/${taskId}`)  // The endpoint for deleting a task by ID
            .end((err, res) => {  // Callback function when the request completes
                expect(res).to.have.status(200);  // Assert the response status is 200 (OK)
                expect(res.body).to.have.property('msg').to.equal('Task deleted successfully.');  // Assert the success message
                done();  // End the test after assertion
            });
    });

    // Test to retrieve a task by ID
it('should retrieve a task by ID', (done) => {
    const taskId = '60c72b2f5f1b2c001c8a0a3c'; // Replace with a valid ID from your database

    // Make a GET request to '/api/tasks/:id' endpoint
    chai.request(server)
        .get(`/api/tasks/${taskId}`) // The endpoint we're testing
        .end((err, res) => { // Callback function when the request completes
            if (err) {
                done(err); // End the test if there's an error
            } else {
                expect(res).to.have.status(200); // Assert the response status is 200 (OK)
                expect(res.body).to.be.an('object'); // Assert the response body is an object
                expect(res.body).to.have.property('_id').to.equal(taskId); // Assert the task ID matches
                done(); // End the test after assertion
            }
        });
});

});
