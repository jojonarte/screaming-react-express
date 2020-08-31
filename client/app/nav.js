import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '../dashboard';
import { connect } from 'react-redux';

function Navigation(props) {
	return (
		<nav className="nav">
			<Link className="nav-link" to="/dashboard">
				<h1>Dashboard</h1>
			</Link>
			<Link className="nav-link" to="/login">
				<h1>Login</h1>
			</Link>
		</nav>
	);
}

export default connect()(Navigation);
