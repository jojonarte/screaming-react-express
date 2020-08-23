import { SET_IS_LOGGED_IN } from './actionTypes';

const initialState = {
	isLoggedIn: false,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SET_IS_LOGGED_IN: {
			return {
				...state,
				isLoggedIn: action.isLoggedIn || false,
			};
		}
	}

	return state;
};
