import React, { useState } from "react"
import { login } from "../services/dataController"

const Login = ({ setCurrentUser, setCurrentPage }) => {
	const [emailTextField, setEmailTextField] = useState("");
	const [passwordTextField, setPasswordTextField] = useState("");
	const handleEmailField = (event) => {
		setEmailTextField(event.target.value);
	};
	const handlePasswordField = (event) => {
		setPasswordTextField(event.target.value);
	};
	const formLogin = (event) => {
		event.preventDefault();
		login({
			Email: emailTextField,
			password: passwordTextField,
		})
			.then((user) => {
				setCurrentUser(user.data);
				setCurrentPage("profilePage");
			})
			.catch((err) => {
				setCurrentUser(null);
				//TODO: show error message
			});
	};
	return (
		<form onSubmit={formLogin}>
			<label htmlFor="email">E-mail</label>
			<input
				type="text"
				id="email"
				value={emailTextField}
				onChange={handleEmailField}
			/>
			<br />
			<label htmlFor="password">Password</label>
			<input
				type="password"
				id="password"
				value={passwordTextField}
				onChange={handlePasswordField}
			/>
			<br />
			<button type="submit">Login</button>
		</form>
	);
};
export default Login
