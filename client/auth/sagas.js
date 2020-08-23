import { take, put, select, fork, takeLatest } from 'redux-saga/effects';
import { REQUEST_LOGIN } from './actionTypes';
export function* requestLoginSaga(action) {
	const { username, password } = action;
	console.log('LOGIN SAGA', action);
}

export default function* rootSaga() {
	yield takeLatest(REQUEST_LOGIN, requestLoginSaga);
}
