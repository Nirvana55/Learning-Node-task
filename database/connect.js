const mongoosed = require('mongoose');

//connecting the above link into the mongoose
// connecting to database
// to make async function we are creating mongoose connect like this
//other wise we can directly put url inside the connect
const connectDB = (url) => {
	return mongoosed.connect(url);
};

// exporting the function
module.exports = connectDB;
