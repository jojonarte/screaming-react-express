import { defaultState } from '../../server/defaultState';
import { CREATE_TASK } from './actionTypes';

export default function (state = defaultState.tasks, action) {
	switch (action.type) {
		case CREATE_TASK: {
			return state.concat({
				id: action.taskId,
				name: 'New task',
				group: action.groupId,
				owner: action.ownerId,
				isCompleted: false,
			});
		}
	}
	return state;
}
