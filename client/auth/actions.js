import { SET_IS_LOGGED_IN } from './actionTypes';
export const setIsLoggedIn = (isLoggedIn) => ({
	type: SET_IS_LOGGED_IN,
	isLoggedIn,
});
