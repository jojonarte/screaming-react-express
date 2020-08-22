import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTaskCompletion, setTaskGroup, setTaskName } from '../actions';

function TaskDetail({
	id,
	comments,
	task,
	groups,
	setTaskCompletion,
	setTaskGroup,
	setTaskName,
}) {
	const { isCompleted } = task;
	return (
		<div>
			<div>
				<input
					onChange={(e) => setTaskName(id, e.target.value)}
					value={task.name}
				></input>
			</div>
			<div>
				<button onClick={() => setTaskCompletion(id, !isCompleted)}>
					{isCompleted ? 'ReOpen' : 'Complete'}
				</button>
			</div>
			<div>
				<select
					value={task.group}
					onChange={(e) => setTaskGroup(id, e.target.value)}
				>
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

	return {
		id,
		task,
		groups,
	};
}

const __mapDispatchToProps = {
	setTaskCompletion,
	setTaskGroup,
	setTaskName,
};

export default connect(__mapStateToProps, __mapDispatchToProps)(TaskDetail);
