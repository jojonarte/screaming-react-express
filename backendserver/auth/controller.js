const UserModel = require('./model');
const ErrorResponse = require('../util/ErrorResponse');
const { asyncResolver } = require('../util/middleware');

/**
 * @description Registration
 * @route /api/v1/auth/register
 * @access Public
 */
exports.register = asyncResolver(async (req, res, next) => {
	console.log('REQZZZ', req);
	const { username, name, password } = req.body;

	const user = await UserModel.create({
		username,
		name,
		password,
	});

	res.status(200).json({ success: true });
});

/**
 * @description Registration
 * @route /api/v1/auth/login
 * @access Public
 */
exports.login = asyncResolver(async (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		return next(
			new ErrorResponse('Please provide correct email and password', 400)
		);
	}

	const user = await UserModel.findOne({ username }).select('+password');

	if (!user) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	// TODO SALTING maybe using bcrypt?
	const isMatch = user.password === password;
	console.log('UZER', isMatch, password, user.password);

	if (!isMatch) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	// TODO: Handle token/jwt
	res.status(200).json({ success: true });
});
