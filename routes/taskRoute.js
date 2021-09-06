const express = require('express');
const router = express.Router();
const {
	getAllTask,
	postTask,
	patchTask,
	deleteTask,
	getSingleTask,
} = require('../Controllers/task');

// Creating a route in another method
router.route('/').get(getAllTask).post(postTask);
router.route('/:id').get(getSingleTask).patch(patchTask).delete(deleteTask);

module.exports = router;
