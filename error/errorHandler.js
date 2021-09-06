class customErrorHandler extends Error {
	// creating a constructor
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
	}
}

// creating a function so that we should not add manully all the code
const errorHandler = (msg, statusCode) => {
	// passing the arguments as msg and status code in the above class
	return new customErrorHandler(msg, statusCode);
};

module.exports = { customErrorHandler, errorHandler };
