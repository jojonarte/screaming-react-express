import { REQUEST_TASK_CREATION, CREATE_TASK } from './actionTypes';

export const createTaskCreation = (groupId) => ({
	type: REQUEST_TASK_CREATION,
	groupId,
});

export const createTask = (taskId, groupId, ownerId) => ({
	type: CREATE_TASK,
	taskId,
	groupId,
	ownerId,
});
