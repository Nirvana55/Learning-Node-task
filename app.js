const express = require('express');
// Express function
const app = express();
// Importing route
const tasks = require('./routes/taskRoute');
// Importing Connecting database
const connectDB = require('./database/connect');
// DOT ENV FILE TO KEEP SECRET VARIBALES
require('dotenv').config();
// Not found Middle Wear
const notFound = require('./middlewear/notfound');
// Custom Error Middle Wear
const customError = require('./middlewear/error');
// setting up the port
// process.env port or use the local
const port = process.env.Port || 5000;

// access of all the public file
app.use(express.static('./public'));
// middle wear to use json file
app.use(express.json());

// Route
app.use('/api/v1/tasks', tasks);

// not found app.use
app.use(notFound);
app.use(customError);

// We are waiting for the database to connect and only to open the server
// Else it will kill the app
const start = async () => {
	try {
		// awaiting the database
		// TO ACCESS THE SECRET VARIBALE PROCESS.ENV AND VARIBALE NAME
		await connectDB(process.env.MONGO_URI);
		// Server Port
		app.listen(port, console.log(`server is running on port ${port}`));
	} catch (error) {
		console.log(console.log(error));
	}
};

start();
