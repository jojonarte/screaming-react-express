import { take, put, select, fork, takeLatest } from 'redux-saga/effects';
import { REQUEST_LOGIN } from './actionTypes';
import api from '../api';
import { setIsLoggedIn } from './actions';
export function* requestLoginSaga(action) {
	const { username, password } = action;
	const res = yield api.post('/auth/login', { username, password });
	console.log('LOGIN SAGA REQ RESPONSE', res);

	if (res.status === 200) {
		yield put(setIsLoggedIn(true));
	}
}

export default function* rootSaga() {
	yield takeLatest(REQUEST_LOGIN, requestLoginSaga);
}
