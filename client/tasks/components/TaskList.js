import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createTaskCreation } from '../actions';

function TaskList({ tasks, name, id, createNewTask }) {
	return (
		<div>
			<h3>{name}</h3>
			{tasks.map((task) => (
				<Link to={`/task/${task.id}`}>
					<li key={task.id}>{task.name}</li>
				</Link>
			))}
			<button onClick={() => createNewTask(id)}>New task</button>
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

function __mapDispatchToProps(dispatch, ownProps) {
	return {
		createNewTask: (id) => dispatch(createTaskCreation(id)),
	};
}

export default connect(__mapStateToProps, __mapDispatchToProps)(TaskList);
