import React, { useState } from "react";
import ReactDOM from "react-dom";
import { signup, getUserByID, getUserInfoByID } from "./services/dataController";
import Login from "./components/login"
import Signup from "./components/signup"




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
				<Signup setCurrentUser={setCurrentUser} />
			</>
		);
	}
	return <div></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
