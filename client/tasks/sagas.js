import { take, put, select, fork } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import { REQUEST_TASK_CREATION } from './actionTypes';
import { createTask } from './actions';

export function* taskCreationSaga() {
	while (true) {
		const { groupId } = yield take(REQUEST_TASK_CREATION);
		const ownerId = 'u1';
		const taskId = uuid();

		yield put(createTask(taskId, groupId, ownerId));
		console.log('SAGA REQUEST_TASK_CREATION', groupId);
	}
}
