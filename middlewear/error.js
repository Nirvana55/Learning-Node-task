const { customErrorHandler } = require('../error/errorHandler');
const customError = (err, req, res, next) => {
	if (err instanceof customErrorHandler) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	res.status(500).json({ msg: err });
};

module.exports = customError;
