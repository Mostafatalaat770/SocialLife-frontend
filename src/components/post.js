import React, { useState, useEffect } from "react";
import { getUserInfoByID } from "../services/dataController";

const PosterInfo = ({posterID}) => {
	const [posterInfo, setPosterInfo] = useState(null)
	useEffect(() => {getUserInfoByID(posterID).then(response => setPosterInfo(response.data))}, [])
	

	if(!posterInfo){
		return <div>loading...</div>
	}

	return(
		<div>
			<img src={posterInfo.profile_picture} style={{float: "left"}}/>
			<div>{`${posterInfo.Fname} ${posterInfo.Lname}`}</div>
		</div>
	)
}

const Post = ({post}) => {
	return(
		<div>
			 <PosterInfo posterID={post.posted_by} />
			 <span>{post.time}</span>
			<p>{post.text_content}</p>
			<img src={post.image_content}/>
			</div>
	)
}

export default Post