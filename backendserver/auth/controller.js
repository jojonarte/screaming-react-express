import UserModel from './model';
import ErrorResponse from '../util/ErrorResponse';
import { asyncResolver } from '../util/middleware';

/**
 * @description Registration
 * @route /api/v1/auth/register
 * @access Public
 */
export const register = asyncResolver(async (req, res, next) => {
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
export const login = asyncResolver(async (req, res, next) => {
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

	if (!isMatch) {
		return next(new ErrorResponse('Invalid credentials', 401));
	}

	// TODO: Handle token/jwt
	res.status(200).json({ success: true });
});
