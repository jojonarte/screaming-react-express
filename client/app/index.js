import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from '../dashboard';
import { Provider } from 'react-redux';
import { store } from '../store';
import history from '../store/history';
import Navigation from '../navigation';
import { TaskDetail } from '../tasks';
import { Login } from '../auth';

export default function App() {
	return (
		<BrowserRouter history={history}>
			<Provider store={store}>
				<Navigation />
				<Route
					exact
					path="/dashboard"
					render={(props) => <Dashboard {...props} />}
				/>
				<Route
					exact
					path="/task/:id"
					render={({ match }) => <TaskDetail match={match} />}
				/>
				<Route exact path="/login" component={Login} />
			</Provider>
		</BrowserRouter>
	);
}
