export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const createTaskCreation = (groupId) => ({
  type: REQUEST_TASK_CREATION,
  payload: groupId,
});

export const createTask = (taskId, groupId, ownerId) => ({
  type: CREATE_TASK,
  payload: { taskId, groupId, ownerId },
});
