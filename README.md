Todo-Backend Application

Overview

The Todo-Backend is a simple backend application that provides functionality for managing tasks in a to-do list. It offers features such as adding, updating, deleting, and viewing tasks, allowing users to organize their tasks efficiently.
This application was built using Node.js and Express.js to provide a RESTful API. The backend interacts with a database to store and manage task data, providing the necessary endpoints to create, read, update, and delete tasks. The application is designed to be the backend for a todo list application, with a clear focus on simplicity and performance.

Features
Create a Task: Allows users to add a new task with relevant details.
Update a Task: Users can modify the title, description, or status (e.g., "completed" or "pending") of an existing task.
Delete a Task: Enables the removal of tasks from the list.
View Tasks: Provides the ability to fetch and view a list of all tasks or filter tasks by completion status (e.g., completed or pending).

API Endpoints:
POST /tasks: Adds a new task to the to-do list.
GET /tasks: Retrieves a list of all tasks.
GET /tasks/:id: Fetches a specific task by its ID.
PUT /tasks/:id: Updates an existing task.
DELETE /tasks/:id: Deletes a task by its ID.

Tech Stack
Node.js: The runtime environment used to build the server.
Express.js: Web framework used to build the RESTful API.
MongoDB: The database used for storing task data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, providing a straightforward way to interact with the database.

Setup of Application
To get started with the Todo Backend application:

Clone the repository:
https://github.com/anushkajadhav2108/ng-training-assignment-Backend-1

Navigate into the project directory:
cd todo-app-backend

Install the dependencies:
npm install

Run the application:
npm start

Testing API: 
Used tool Postman to test the API endpoints or integrate the backend with a front-end application.
Postman Documentation Link:
https://documenter.getpostman.com/view/30668799/2sAYQanBh4
