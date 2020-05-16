import React, { useState, useEffect } from "react";
import {
	getUserByID,
	acceptFriendRequest,
	deleteFriendRequest,
	sendFriendRequest,
	unfriend,
} from "../services/dataController";
import Post from "./post";

const UserInfo = ({ userData, friendshipState }) => {
	return (
		<>
			<h2 id="profile-owner-name">
				{userData.Fname} {userData.Lname}
			</h2>
			<p id="Gender">{userData.gender}</p>
			<p id="phone">{userData.phoneNumber}</p>
			<p id="Home Town">{userData.homeTown}</p>
			{friendshipState === 0 && (
				<>
					<p id="date-of-birth">{userData.DOB}</p>
					<p id="About-me">{userData.aboutMe}</p>
				</>
			)}
		</>
	);
};
const Friendship = ({ friendshipState, currentUserID, requestedID }) => {
	const [currentState, setCurrentStata] = useState(friendshipState)
	const handleAddRequest = (ID) => {
		sendFriendRequest(ID).then(setCurrentStata(2))
	};
		const handleRemoveRequest = (ID) => {
		unfriend(ID).then(setCurrentStata(1))
	};
		const handleCancelRequest = (ID) => {
		deleteFriendRequest(ID).then(setCurrentStata(1))
	};
		const handleAcceptRequest = (ID) => {
		acceptFriendRequest(ID).then(setCurrentStata(0))
	};

	switch (currentState) {
		case 0: // isFriend or currentUser
			if (currentUserID === requestedID) {
				return <> </>;
			}
			return <button className="btn btn-danger" onClick={() => handleRemoveRequest(requestedID)}>Remove Friend</button>;
			break;
		case 1: // non-friend
			return <button className="btn btn-primary" onClick={() => handleAddRequest(requestedID)}>Add Friend</button>;
			break;
		case 2: // cancel req
			return (
				<button className="btn btn-danger" onClick={() => handleCancelRequest(requestedID)}>
					Cancel Friend Request
				</button>
			);
			break;
		case 3: //accept req
			return (
				<button className="btn btn-primary" onClick={() => handleAcceptRequest(requestedID)}>
					Accept Friend Request
				</button>
			);
			break;
	}
};

const Profile = ({ requestedID, currentUserID }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		getUserByID(requestedID).then((response) => setUser(response.data));
	}, []);
	if (!user) {
		return <div>loading...</div>;
	}

	//TODO: relationship and info component

	const posts = user.posts.map((post) => (
		<Post post={post} key={post.Post_ID} />
	));

	return (
		<div>
			{/* TODO: realtionship and info component */}
			<div className="container">
				<div style={{ display: "inline-block" }}>
					<img
						src="assets/img/150x150.gif"
						className="img-circle pull-left"
						alt
						id="profile-pic"
					/>
					<div
						id="about-me"
						style={{
							float: "right",
							marginLeft: 50,
							marginTop: 50,
							position: "relative",
							bottom: 30,
						}}
					>
						<UserInfo
							userData={user.userData}
							friendshipState={user.friendshipState}
						/>
						<Friendship
							currentUserID={currentUserID}
							requestedID={requestedID}
							friendshipState={user.friendshipState}
						/>
					</div>
				</div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<a href="#" className="pull-right">
							View all
						</a>
						<h4 id="post-holder">post</h4>
					</div>
					<div className="panel-body">
						<img
							src="assets/img/150x150.gif"
							style={{
								marginTop: 18,
								height: 70,
								width: 70,
								borderRadius: "50%",
							}}
							className="img-circle pull-right"
						/>{" "}
						<a href="#">Hi</a>
						<div className="clearfix" />
						<p id="post-content">Noooooooooo</p>
						<hr />
						<ul className="list-unstyled">
							<li>
								<a href="#">Tal3oot</a>
							</li>
							<li>
								<a href="#">Snoos</a>
							</li>
							<li>
								<a href="#">Swidan</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{posts}
		</div>
	);
};
export default Profile;
