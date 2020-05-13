import React, { useState } from "react";
import { signup } from "../services/dataController";

const Signup = ({ setCurrentUser }) => {
	const [emailTextField, setEmailTextField] = useState("Enter your E-mail..");
	const [passwordTextField, setPasswordTextField] = useState(
		"Enter your password.."
	);
	const [fnameTextField, setFnameTextField] = useState(
		"Enter your first name.."
	);
	const [lnameTextField, setLnameTextField] = useState(
		"Enter your last name.."
	);
	const [phoneNumderTextField, setPhoneNumberTextField] = useState(
		"Enter your phone number.. "
	);
	const [genderTextField, setGenderTextField] = useState(
		"Enter your gender.."
	);
	const [dobTextField, setDOBTextField] = useState(
		"Enter your date of birth.."
	);
	const [profilePictureTextField, setProfilePictureTextField] = useState(
		"Choose your profile picture"
	);
	const [homeTownTextField, setHomeTownTextField] = useState(
		"Enter your home town.."
	);
	const [maritalStatusTextField, setMaritalStatusTextField] = useState(
		"Enter your marital status .."
	);
	const [aboutMeTextField, setAboutMeTextField] = useState(
		"Talk about yourself.."
	);
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
	const handleProfilePictureField = (event) => {
		setProfilePictureTextField(event.target.value);
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
			profile_picture: profilePictureTextField,
			home_town: homeTownTextField,
			marital_status: maritalStatusTextField,
			about_me: aboutMeTextField,
		}).then((user) => setCurrentUser(user.data));
	};
	return (
		<form onSubmit={formSignup}>
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
				type="text"
				id="password"
				value={passwordTextField}
				onChange={handlePasswordField}
			/>
			<br />
			<label htmlFor="fname">First Name</label>
			<input
				type="text"
				id="fname"
				value={fnameTextField}
				onChange={handleFnameField}
			/>
			<br />
			<label htmlFor="lname">Last Name</label>
			<input
				type="text"
				id="lname"
				value={lnameTextField}
				onChange={handleLnameField}
			/>
			<br />
			<label htmlFor="phone">Phone Number</label>
			<input
				type="text"
				id="phone"
				value={phoneNumderTextField}
				onChange={handlePhoneNumberField}
			/>
			<br />
			<label>Gender</label>
			<br />
			<input
				type="radio"
				id="male"
				name="gender"
				value="male"
				onChange={handleGenderField}
			/>
			<label htmlFor="male">Male</label>
			<br />
			<input
				type="radio"
				id="female"
				name="gender"
				value="female"
				onChange={handleGenderField}
			/>
			<label htmlFor="female">Female</label>
			<br />
			<input
				type="radio"
				id="other"
				name="gender"
				value="other"
				onChange={handleGenderField}
			/>
			<label htmlFor="other">Other</label>
			<br />
			<label htmlFor="date">Date Of Birth</label>
			<input
				type="date"
				id="date"
				value={dobTextField}
				onChange={handleDOBField}
			/>
			<br />
			<label htmlFor="profilePicture">Profile Picture</label>
			<input
				type="text"
				id="profilePicture"
				value={profilePictureTextField}
				onChange={handleProfilePictureField}
			/>
			<br />
			<label htmlFor="hometown">Hometown</label>
			<input
				type="text"
				id="hometown"
				value={homeTownTextField}
				onChange={handleHomeTownField}
			/>
			<br />
			<label htmlFor="martialStatus">Martial Status</label>
			<input
				type="text"
				id="martialStatus"
				value={maritalStatusTextField}
				onChange={handleMaritalStatusField}
			/>
			<br />
			<label htmlFor="aboutMe">About Me</label>
			<input
				type="text"
				id="aboutMe"
				value={aboutMeTextField}
				onChange={handleAboutMeField}
			/>
			<br />
			<button type="submit">Signup</button>
		</form>
	);
};
export default Signup