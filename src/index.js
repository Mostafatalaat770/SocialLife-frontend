import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login"
import Signup from "./components/signup"
import Profile from "./components/profile"


const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [currentPage, setCurrentPage] = useState("login");
	if (currentPage === "login") {
		return (
			<div>
				<Login
					setCurrentUser={setCurrentUser}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		);
	}

	if (currentPage === "signup") {
		return (
			<>
				<Signup setCurrentUser={setCurrentUser}
						setCurrentPage={setCurrentPage}		
				/>
			</>
		);
	}

	if(currentPage === "profilePage"){
		return <>
			<Profile requestedID={currentUser.ID} />
		</>
	}
	return <div></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
