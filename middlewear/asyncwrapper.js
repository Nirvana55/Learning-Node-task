const asyncWrapper = (fn) => {
	// creating a async function
	// req,res,next is the default argument provided by the express
	return async (req, res, next) => {
		try {
			// fn as the argument and passing req,res and next
			fn(req, res, next);
		} catch (error) {
			// need to create a custom error
			next(error);
		}
	};
};

module.exports = asyncWrapper;
