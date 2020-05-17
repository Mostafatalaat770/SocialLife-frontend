import React, { useState } from "react";
import ReactDOM from "react-dom";
import Login from "./components/login"
import Signup from "./components/signup"
import Profile from "./components/profile"
import Friends from "./components/friends"
import FriendRequests from "./components/friendRequests"
import Nav from "./components/nav"
import Search from "./components/search"

const App = () => {
	const [currentUser, setCurrentUser] = useState(null);
	const [currentPage, setCurrentPage] = useState("login");
	const [requestedID, setRequestedID] = useState(null)
	const [searchMode, setSearchMode] = useState(1)
	const [searchQuery, setSearchQuery] = useState("")
	
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
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} setSearchMode={setSearchMode} setSearchQuery={setSearchQuery} />
			<Profile requestedID={requestedID} currentUserID={currentUser.ID}/>
		</>
	}
	if(currentPage === "friendsPage"){
		return (
		<>
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} setSearchMode={setSearchMode} setSearchQuery={setSearchQuery} />
		<Friends setRequestedID={setRequestedID} setCurrentPage={setCurrentPage} />
		</>
		)
	}
	if(currentPage === "friendRequestsPage"){
		return (
			<>
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} setSearchMode={setSearchMode} setSearchQuery={setSearchQuery} />
			<FriendRequests setRequestedID={setRequestedID} setCurrentPage={setCurrentPage} />
			</>
			)
	}
	if(currentPage === "searchPage"){
		return(
		<>
		<Nav currentUser={currentUser} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} setSearchMode={setSearchMode} setSearchQuery={setSearchQuery} />
		<Search searchMode={searchMode} searchQuery={searchQuery} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} key={`${searchMode} ${searchQuery}`}/>
		</>)
	}
};

ReactDOM.render(<App />, document.getElementById("root"));
