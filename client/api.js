import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:8888/api/v1/',
	timeout: 2000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export default api;
