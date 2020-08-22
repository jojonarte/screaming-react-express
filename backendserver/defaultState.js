export const defaultState = {
	users: [
		{
			id: 'u1',
			name: 'dev',
		},
	],
	groups: [
		{
			name: 'Todo',
			id: 'g1',
			owner: 'u1',
		},
		{
			name: 'In progress',
			id: 'g2',
			owner: 'u1',
		},
	],
	tasks: [
		{
			name: 'Sleep',
			id: 't1',
			group: 'g1',
			user: 'u1',
			isCompleted: false,
		},
	],
	comments: [
		{
			owner: 'u1',
			id: 'c1',
			task: 't1',
			content: 'good',
		},
	],
};
