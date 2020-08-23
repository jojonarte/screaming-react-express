import React from 'react';
import { connect } from 'react-redux';
import { TaskList } from '../tasks';

export const Dashboard = ({ groups }) => {
  return (
    <div>
      <div>
        {groups.map((group) => (
          <TaskList key={group.id} id={group.id} name={group.name} />
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
