import React from 'react';
import { Link } from 'react-router-dom';
import { Dashboard } from '../dashboard';
import { connect } from 'react-redux';

function Navigation() {
  return (
    <div>
      <Link to="/dashboard">
        <h1>Dashboard</h1>
      </Link>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
    </div>
  );
}

export default connect()(Navigation);
