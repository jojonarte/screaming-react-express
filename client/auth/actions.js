import { SET_IS_LOGGED_IN, REQUEST_LOGIN } from './actionTypes';
export const setIsLoggedIn = (isLoggedIn) => ({
	type: SET_IS_LOGGED_IN,
	isLoggedIn,
});

export const requestLogin = (username, password) => ({
	type: REQUEST_LOGIN,
	username,
	password,
});
