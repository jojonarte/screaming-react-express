import React from 'react';
import { connect } from 'react-redux';

function TaskList({ tasks, name }) {
	console.log('zzzxx', tasks);
	return (
		<div>
			<h3>{name}</h3>
			{tasks.map((task) => (
				<li>{task.name}</li>
			))}
		</div>
	);
}

function __mapStateToProps(state, ownProps) {
	const groupId = ownProps.id;
	return {
		name: ownProps.name,
		tasks: state.tasks.filter((task) => task.group === groupId),
	};
}

export default connect(__mapStateToProps)(TaskList);
