import React from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../actions';

function Login(props) {
  const handleLogin = (e) => {
    e.preventDefault();
    props.requestLogin('jojonarte', 'jojonarte');
  };
  const handleSubmit = (e) => {
    this.handleLogin(e);
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <form onSubmit>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}
const __mapDispatchToProps = {
  requestLogin,
};
export default connect(null, __mapDispatchToProps)(Login);
