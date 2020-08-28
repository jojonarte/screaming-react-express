import React, { useState } from 'react';
import { connect } from 'react-redux';
import { requestLogin } from '../actions';

function Login(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
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
					<input
						type="text"
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username"
					></input>
					<input
						type="password"
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
					></input>
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
