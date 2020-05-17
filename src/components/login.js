import React, { useState } from "react";
import { login } from "../services/dataController";
import "../pages/login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../pages/login/fonts/iconic/css/material-design-iconic-font.min.css";
import "../pages/login/css/util.css";
import "../pages/login/css/main.css";

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
				setCurrentPage("homePage");
			})
			.catch((err) => {
				setCurrentUser(null);
				//TODO: show error message
			});
	};
	return (
		<div className="limiter">
			<div className="container-login100">
				<div className="wrap-login100">
					<form
						className="login100-form validate-form"
						onSubmit={formLogin}
					>
						<span className="login100-form-logo">
							<i className="zmdi zmdi-landscape" />
						</span>
						<span className="login100-form-title p-b-34 p-t-27">
							Log in
						</span>
						<div
							className="wrap-input100 validate-input"
							data-validate="Enter username"
						>
							<input
								className="input100"
								type="text"
								name="username"
								placeholder="Username"
								value={emailTextField}
								onChange={handleEmailField}
							/>
							<span
								className="focus-input100"
								data-placeholder=""
							/>
						</div>
						<div
							className="wrap-input100 validate-input"
							data-validate="Enter password"
						>
							<input
								className="input100"
								type="password"
								name="pass"
								placeholder="Password"
								value={passwordTextField}
								onChange={handlePasswordField}
							/>
							<span
								className="focus-input100"
								data-placeholder=""
							/>
						</div>
						<div className="container-login100-form-btn">
							<button className="login100-form-btn">Login</button>
						</div>
						<div className="text-center p-t-90">
							<a
								className="txt1"
								onClick={() => setCurrentPage("signup")}
							>
								signup?
							</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;
