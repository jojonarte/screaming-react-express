import { defaultState } from '../../server/defaultState';

export default function (state = defaultState, action) {
  switch (action.type) {
    case CREATE_TASK: {
      console.log('HELLO');
    }
  }
  return state;
}
