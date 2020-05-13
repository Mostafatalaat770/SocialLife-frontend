import React, { useState, useEffect } from "react";
import { getUserByID } from "../services/dataController";
import Post from "./post"

const Profile = ({requestedID}) => {
	const [user, setUser] = useState(null)
	useEffect(() =>{getUserByID(requestedID).then(response => setUser(response.data))}, [])
	if(!user){
		return <div>loading...</div>
	}
	//TODO: relationship and info component

	const posts = user.posts.map(post => <Post post={post} key={post.Post_ID} />)
	
	return(
		<div>
			{/* TODO: realtionship and info component */}
			{posts}
		</div>
	)
}
export default Profile