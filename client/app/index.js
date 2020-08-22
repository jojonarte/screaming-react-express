import React, { Component } from 'react';
import Dashboard from '../dashboard';
import { Provider } from 'react-redux';
import { store } from '../store';

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
	}
}
