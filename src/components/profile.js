import React, { useState, useEffect } from "react";
import {
	getUserByID,
	acceptFriendRequest,
	deleteFriendRequest,
	sendFriendRequest,
	unfriend,
} from "../services/dataController";
import Post from "./post";

const UserInfo = ({ userData, friendshipState, currentUserID, requestedID, setCurrentPage }) => {
	return (
		<>

							<img
						src={`/images/profilePictures/${userData.profilePicture}`}
						className="img-circle pull-left"
						alt
						id="profile-pic"
						height="100px"
						width="100px"
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
									<Friendship
							currentUserID={currentUserID}
							requestedID={requestedID}
							friendshipState={friendshipState}
							setCurrentPage={setCurrentPage}
						/>
								</div>

		</>
	);
};
const Friendship = ({ friendshipState, currentUserID, requestedID, setCurrentPage}) => {
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
		const handleEditProfileRequest = () => {
			setCurrentPage("profileEditPage")
	};
	

	switch (currentState) {
		case 0: // isFriend or currentUser
			if (currentUserID === requestedID) {
				return <button className="btn btn-danger" onClick={handleEditProfileRequest}>Edit Profile</button>
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

const Profile = ({ requestedID, currentUserID, setCurrentPage, setRequestedID }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		getUserByID(requestedID).then((response) => setUser(response.data));
	}, []);
	if (!user) {
		return <div>loading...</div>;
	}

	//TODO: relationship and info component

	const posts = user.posts.map((post) => (
		<li className="list-group-item">
		<Post post={post} key={post.Post_ID} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
		</li>
	));

	return (
			<div className="container">
				<div style={{ display: "inline-block" }}>
						<UserInfo
							userData={user.userData}
							friendshipState={user.friendshipState}
							requestedID={requestedID}
							currentUserID={currentUserID}
							setCurrentPage={setCurrentPage}
						/>
				</div>
				<ul className="list-group list-group-flush">
					{posts}
				</ul>

			</div>

	);
};
export default Profile;
