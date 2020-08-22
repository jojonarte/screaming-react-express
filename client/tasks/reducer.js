import { defaultState } from '../../server/defaultState';
import {
	CREATE_TASK,
	SET_TASK_COMPLETE,
	SET_TASK_GROUP,
	SET_TASK_NAME,
} from './actionTypes';

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
		case SET_TASK_COMPLETE: {
			return state.map((task) => {
				if (task.id === action.id) {
					return {
						...task,
						isCompleted: action.isCompleted,
					};
				}
				return task;
			});
		}
		case SET_TASK_GROUP: {
			return state.map((task) => {
				if (task.id === action.id) {
					return {
						...task,
						group: action.groupId,
					};
				}
				return task;
			});
		}
		case SET_TASK_NAME: {
			return state.map((task) => {
				if (task.id === action.id) {
					return {
						...task,
						name: action.name,
					};
				}
				return task;
			});
		}
	}
	return state;
}
