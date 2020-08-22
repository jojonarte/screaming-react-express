import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function TaskDetail({ id, comments, task, isCompleted, groups }) {
	return (
		<div>
			<div>
				<input value={task.name}></input>
			</div>
			<div>
				<button>{isCompleted ? 'ReOpen' : 'Complete'}</button>
			</div>
			<div>
				<select>
					{groups.map((group) => (
						<option key={group.id} value={group.id}>
							{group.name}
						</option>
					))}
				</select>
			</div>
			<Link to="/dashboard">
				<button>Done</button>
			</Link>
		</div>
	);
}

function __mapStateToProps(state, ownProps) {
	const id = ownProps.match.params.id;
	const { groups, tasks } = state;
	const task = tasks.find((task) => task.id === id);
	console.log(tasks, id, task);
	console.log(ownProps);
	return {
		id,
		task,
		groups,
		isCompleted: task.isCompleted,
	};
}

function __mapDispatchToProps(dispatch, ownProps) {
	return {};
}

export default connect(__mapStateToProps, __mapDispatchToProps)(TaskDetail);
