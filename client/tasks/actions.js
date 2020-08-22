import {
	REQUEST_TASK_CREATION,
	CREATE_TASK,
	SET_TASK_COMPLETE,
	SET_TASK_NAME,
	SET_TASK_GROUP,
} from './actionTypes';

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

export const setTaskCompletion = (id, isCompleted) => ({
	type: SET_TASK_COMPLETE,
	id,
	isCompleted,
});

export const setTaskName = (id, name) => ({
	type: SET_TASK_NAME,
	id,
	name,
});

export const setTaskGroup = (id, groupId) => ({
	type: SET_TASK_GROUP,
	id,
	groupId,
});
