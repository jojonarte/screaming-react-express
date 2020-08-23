import { fork, all } from 'redux-saga/effects';

import taskSagas from '../tasks/sagas';
import authSagas from '../auth/sagas';

function* rootSaga() {
  yield all([taskSagas, authSagas].map(fork));
}

export default rootSaga;
