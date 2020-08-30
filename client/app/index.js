import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from '../store';
import history from '../store/history';
import Router from './router';

export default function App() {
	return (
		<BrowserRouter history={history}>
			<Provider store={store}>
				<Route component={Router} />
			</Provider>
		</BrowserRouter>
	);
}
