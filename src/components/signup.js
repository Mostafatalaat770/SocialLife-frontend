import React, { useState } from "react";
import { signup, uploadProfilePicture } from "../services/dataController";
import "../pages/signup/vendor/mdi-font/css/material-design-iconic-font.min.css";
import "../pages/signup/vendor/font-awesome-4.7/css/font-awesome.min.css";
import "../pages/signup/vendor/select2/select2.min.css";
import "../pages/signup/vendor/datepicker/daterangepicker.css";
import "../pages/signup/css/main.css";

const Signup = ({ setCurrentUser, setCurrentPage }) => {
	const [emailTextField, setEmailTextField] = useState("");
	const [passwordTextField, setPasswordTextField] = useState("");
	const [fnameTextField, setFnameTextField] = useState("");
	const [lnameTextField, setLnameTextField] = useState("");
	const [phoneNumderTextField, setPhoneNumberTextField] = useState("");
	const [genderTextField, setGenderTextField] = useState("Male");
	const [dobTextField, setDOBTextField] = useState("");
	const profilePictureImage = React.createRef();
	const [homeTownTextField, setHomeTownTextField] = useState("");
	const [maritalStatusTextField, setMaritalStatusTextField] = useState("");
	const [aboutMeTextField, setAboutMeTextField] = useState("");
	const handleEmailField = (event) => {
		setEmailTextField(event.target.value);
	};
	const handlePasswordField = (event) => {
		setPasswordTextField(event.target.value);
	};
	const handleFnameField = (event) => {
		setFnameTextField(event.target.value);
	};
	const handleLnameField = (event) => {
		setLnameTextField(event.target.value);
	};
	const handlePhoneNumberField = (event) => {
		setPhoneNumberTextField(event.target.value);
	};
	const handleGenderField = (event) => {
		setGenderTextField(event.target.value);
	};
	const handleDOBField = (event) => {
		setDOBTextField(event.target.value);
	};
	const handleHomeTownField = (event) => {
		setHomeTownTextField(event.target.value);
	};
	const handleMaritalStatusField = (event) => {
		setMaritalStatusTextField(event.target.value);
	};
	const handleAboutMeField = (event) => {
		setAboutMeTextField(event.target.value);
	};
	const formSignup = (event) => {
		event.preventDefault();
		signup({
			Email: emailTextField,
			password: passwordTextField,
			Fname: fnameTextField,
			Lname: lnameTextField,
			phone_number: phoneNumderTextField,
			gender: genderTextField,
			DOB: dobTextField,
			home_town: homeTownTextField,
			marital_status: maritalStatusTextField,
			about_me: aboutMeTextField,
		}).then((user) => {
			const profilePicture = new FormData()
			profilePicture.append("profilePicture", profilePictureImage.current.files[0])
			uploadProfilePicture(profilePicture).then(res => 
			{setCurrentUser(user.data);
			setCurrentPage("homePage");}
			)
		});
	};
	return (
		<div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
			<div className="wrapper wrapper--w680">
				<div className="card card-4">
					<div className="card-body">
						<h2 className="title">Registration Form</h2>
						<form onSubmit={formSignup}>
							<div className="row row-space">
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											first name
										</label>
										<input
											className="input--style-4"
											type="text"
											name="first_name"
											value={fnameTextField}
											onChange={handleFnameField}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											last name
										</label>
										<input
											className="input--style-4"
											type="text"
											name="last_name"
											value={lnameTextField}
											onChange={handleLnameField}
										/>
									</div>
								</div>
							</div>
							<div className="row row-space">
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											Birthday
										</label>
										<div className="input-group">
											<input
												style={{padding: "0 20px"}}
												className="input--style-4 js-datepicker"
												type="date"
												name="birthday"
												value={dobTextField}
												onChange={handleDOBField}
											/>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="input-group">
										<label className="label">Gender</label>
										<div className="input-group">
											<label className="radio-container m-r-45" style={{paddingTop: 20}}>
												Male
												<input
													type="radio"
													defaultChecked="checked"
													name="gender"
													value="Male"
													onChange={handleGenderField}
												/>
												<span className="checkmark" style={{top:"70%"}}/>
											</label>
											<label className="radio-container" style={{paddingTop: 20}}>
												Female
												<input
													type="radio"
													name="gender"
													value="Female"
													onChange={handleGenderField}
												/>
												<span className="checkmark" style={{top:"70%"}}/>
											</label>
										</div>
									</div>
								</div>
							</div>
							<div className="row row-space">
								<div className="col-6">
									<div className="input-group">
										<label className="label">Email</label>
										<input
											className="input--style-4"
											type="email"
											name="email"
											value={emailTextField}
											onChange={handleEmailField}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											Password
										</label>
										<input
											className="input--style-4"
											type="password"
											name="password"
											id="pass"
											value={passwordTextField}
											onChange={handlePasswordField}
										/>
									</div>
								</div>
							</div>
							<div className="row row-space">
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											Phone Number
										</label>
										<input
											className="input--style-4"
											type="text"
											name="phone"
											value={phoneNumderTextField}
											onChange={handlePhoneNumberField}
										/>
									</div>
								</div>

								<div className="col-6">
									<div className="input-group">
										<label className="label">
											Material Status
										</label>
										<input
											className="input--style-4"
											type="text"
											name="marital_status"
											value={maritalStatusTextField}
											onChange={handleMaritalStatusField}
										/>
									</div>
								</div>
							</div>
							<div className="row row-space">
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											Home Town
										</label>
										<input
											className="input--style-4"
											type="text"
											name="home-town"
											value={homeTownTextField}
											onChange={handleHomeTownField}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-group">
										<label className="label">
											About Me
										</label>
										<input
											className="input--style-4"
											type="text"
											name="about_me"
											value={aboutMeTextField}
											onChange={handleAboutMeField}
										/>
									</div>
								</div>
								<div className="row row-space">
									<div className="col-6">
										<div className="input-group">
											<label className="label">
												Profile Picture
											</label>
											<input
												className="input--style-4 edit_input"
												type="file"
												name="profilePicture"
												accept="image/*"
												ref={profilePictureImage}
											/>
										</div>
									</div>
									<div className="col-6" style={{ top: 30, left: "43%",  }}>
											<button
												className="btn btn-primary btn-lg"
												style={{fontSize: 18,
													background: "#4272d7"}}
												type="submit"
											>
												Submit
											</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Signup;
