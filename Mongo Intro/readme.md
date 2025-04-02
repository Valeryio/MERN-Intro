# CRUD API with MongoDB and Express.js

## Description
This project is a simple CRUD API built with **Express.js** to manage a fictional resource (e.g., "users"). The goal of this project is to learn how to use Express.js and MongoDB to create a RESTful API that allows you to create, read, update, and delete data.

## Features
- **Create a user**: Adds a new user to the database.
- **Read users**: Retrieves a list of all users or a specific user.
- **Update a user**: Modifies an existing user's information.
- **Delete a user**: Removes a user from the database.

## Prerequisites
Before starting, ensure that you have the following tools installed:
- **Node.js** (version 14 or higher): [Node.js](https://nodejs.org/)
- **MongoDB**: [MongoDB Community Edition](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** (package manager)

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Valeryio/MERN-Intro
   cd MERN-Intro


2. Install the dependencies:

	````
	npm install

3. Create a .env file at the root of the project to configure your MongoDB connection:
	```
	MONGO_URI=mongodb://localhost:27017/your-database-name

4. Start the application:
	```
	npm start
	// The application will be accessible at http://localhost:3000.

## API Routes
- GET /posts : Retrieves a list of all users.

- POST /posts : Creates a new user. (e.g., { "name": "John Doe", "email": "john@example.com" })

- PUT /posts/:id : Updates a user by their ID.

- DELETE /posts/:id : Deletes a user by their ID.

Project Structure
```
├── models
│   └── dbconfig.js  
│   └── postModel.js            # MongoDB model for posts
├── routes
│   └── postRoutes.js      # API routes for user operations
├── server.js              # Main entry point to the app
├── .env                   # MongoDB connection URI
└── package.json           # Project dependencies and scripts
````

## Contributing
Feel free to fork this project, submit issues, or send pull requests. If you have any suggestions or improvements, please open an issue!


## License
This project is licensed under the MIT License - see the LICENSE file for details.