import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TaskDetail } from '../tasks';

import Navigation from './nav';

const Login = lazy(() => import('../auth/components/Login'));
const Dashboard = lazy(() => import('../dashboard'));

function Router() {
	return (
		<>
			<Navigation />
			<Suspense fallback={<div>Loading....</div>}>
				<Switch>
					<Route
						path="/dashboard"
						render={(props) => <Dashboard {...props} />}
					/>
					<Route
						path="/task/:id"
						render={({ match }) => <TaskDetail match={match} />}
					/>
					<Route exact path="/login" component={Login} />
				</Switch>
			</Suspense>
		</>
	);
}

export default Router;
