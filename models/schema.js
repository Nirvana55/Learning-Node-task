const mongoose = require('mongoose');

// schema creating the structure of the file
const taskSchema = new mongoose.Schema({
	// This is schema validation
	// all the validation is on mongoose DOCS
	name: {
		type: String,
		required: [true, 'Please Provide Name'],
		trim: true,
		maxlength: [20, 'Please provide text less than 20'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

// models making the CRUD easily (schema name that identifies, schema variable)
module.exports = mongoose.model('Task', taskSchema);
