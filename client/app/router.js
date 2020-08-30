import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../dashboard';
import { TaskDetail } from '../tasks';
import { Login } from '../auth';
import Navigation from '../navigation';

function Router() {
	return (
		<>
			<Navigation />
			<Switch>
				<Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
				<Route
					path="/task/:id"
					render={({ match }) => <TaskDetail match={match} />}
				/>
				<Route exact path="/login" component={Login} />
			</Switch>
		</>
	);
}

export default Router;
