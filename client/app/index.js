import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import Dashboard from '../dashboard';
import { Provider } from 'react-redux';
import { store } from '../store';
import history from '../store/history';
import Navigation from '../navigation';

export default class App extends Component {
	render() {
		return (
			<Router history={history}>
				<Provider store={store}>
					<div>
						<Navigation />
						<Route
							exact
							path="/dashboard"
							render={(props) => <Dashboard {...props} />}
						/>
					</div>
				</Provider>
			</Router>
		);
	}
}
