import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login"
import Signup from "./components/signup"
import Profile from "./components/profile"
import Friends from "./components/friends"
import FriendRequests from "./components/friendRequests"
import Nav from "./components/nav"

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [currentPage, setCurrentPage] = useState("login");
	const [requestedID, setRequestedID] = useState(null)
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
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
			<Profile requestedID={requestedID} currentUserID={currentUser.ID}/>
		</>
	}
	if(currentPage === "friendsPage"){
		return (
		<>
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
		<Friends setRequestedID={setRequestedID} setCurrentPage={setCurrentPage} />
		</>
		)
	}
	if(currentPage === "friendRequestsPage"){
		return (
			<>
			<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
			<FriendRequests setRequestedID={setRequestedID} setCurrentPage={setCurrentPage} />
			</>
			)
	}
	return <div></div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
