import { take, put, select, fork, takeLatest } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import { REQUEST_TASK_CREATION } from './actionTypes';
import { createTask } from './actions';

export function* taskCreationSaga(action) {
  const { groupId } = action;
  const ownerId = 'u1';
  const taskId = uuid();

  yield put(createTask(taskId, groupId, ownerId));
  console.log('SAGA REQUEST_TASK_CREATION', groupId);
}

export default function* rootSaga() {
  yield takeLatest(REQUEST_TASK_CREATION, taskCreationSaga);
}
