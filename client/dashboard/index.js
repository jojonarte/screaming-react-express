import React from 'react';
import { connect } from 'react-redux';

export const Dashboard = ({ groups }) => {
	return (
		<div>
			<h1>Dashboard</h1>
			<div>
				{groups.map((group) => (
					<li>group</li>
				))}
			</div>
		</div>
	);
};

function __mapStateToProps(state) {
	return {
		groups: state.groups,
	};
}

export default connect(__mapStateToProps)(Dashboard);
