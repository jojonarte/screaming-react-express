import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../store';
import history from '../store/history';
import RootRoute from './rootRouter';

export default function App() {
	return (
		<Router history={history}>
			<Provider store={store}>
				<Route component={RootRoute} />
			</Provider>
		</Router>
	);
}
