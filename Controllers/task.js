// importing the schema
const schemaTask = require('../models/schema');
const asyncWrap = require('../middlewear/asyncwrapper');
const { errorHandler } = require('../error/errorHandler');

// Getting all task
const getAllTask = asyncWrap(async (req, res) => {
	// creating a try catch
	// Queries are not a promise but we can create try and catch
	// getting all task
	// schema task as model and find as the query
	const getTask = await schemaTask.find({});
	res.status(200).json({ getTask });
});

// Post method
const postTask = asyncWrap(async (req, res) => {
	// schema task is a model
	// creating a schema task and requesting the body of the post
	const taskPost = await schemaTask.create(req.body);
	// inserting the task value in json
	res.status(201).json({ taskPost });
});

// Getting single task
const getSingleTask = asyncWrap(async (req, res, next) => {
	// just requesting the params
	const { id: taskId } = req.params;
	// finding single element
	const singleTask = await schemaTask.findOne({ _id: taskId });
	//if there no task
	if (!singleTask) {
		// custom error handler
		// passing the arguments for the custo error
		return next(errorHandler(`there is no id name ${taskId}`, 404));
	}
	res.status(200).json({ singleTask });
});

// Delete method
const deleteTask = asyncWrap(async (req, res, next) => {
	const { id: taskId } = req.params;
	const taskDelete = await schemaTask.findOneAndDelete({ _id: taskId });
	if (!taskDelete) {
		return next(errorHandler(`there is no id name ${taskId}`, 404));
	}
	res.status(200).json({ taskDelete });
	// we can do
	// json.status(200).send() also
});

// Patch/put method
const patchTask = asyncWrap(async (req, res, next) => {
	const { id: taskId } = req.params;
	// since we need body we are using req.body
	//to run the validators of schema we are keeping runValidators as true
	const updateTask = await schemaTask.findOneAndUpdate(
		{ _id: taskId },
		req.body,
		{ new: true, runValidators: true }
	);
	if (!updateTask) {
		return next(errorHandler(`Wrong ID ${taskId}`, 404));
	}
	res.status(201).json({ updateTask });
});

// Exporting all above function
module.exports = { getAllTask, postTask, deleteTask, patchTask, getSingleTask };
