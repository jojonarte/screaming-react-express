import 'regenerator-runtime/runtime';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import tasksReducer from '../tasks/reducer';
import authReducer from '../auth/reducer';
import rootSaga from '../app/sagas';
import { defaultState } from '../../backendserver/defaultState';

const sagaMiddleware = createSagaMiddleware();

const usersReducer = (state = defaultState.users, action) => {
  return state;
};
const groupsReducer = (state = defaultState.groups, action) => {
  return state;
};
const commentsReducer = (state = defaultState.comments, action) => {
  return state;
};

export const store = createStore(
  combineReducers({
    auth: authReducer,
    tasks: tasksReducer,
    users: usersReducer,
    groups: groupsReducer,
    comments: commentsReducer,
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
