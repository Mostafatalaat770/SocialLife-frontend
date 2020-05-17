import React, { useState, useEffect } from "react";
import { getUserInfoByID } from "../services/dataController";

const PosterInfo = ({posterID, postTime, setCurrentPage, setRequestedID}) => {
	const [posterInfo, setPosterInfo] = useState(null)
	useEffect(() => {getUserInfoByID(posterID).then(response => {setPosterInfo(response.data)
	console.log(response.data);})}, [])
	

	if(!posterInfo){
		return <div>loading...</div>
	}
	const handleFriendClick = (ID) => {
        setCurrentPage("profilePage")
        setRequestedID(ID)
    }

	return(
			<div className="media" style={{marginRight: 30}}>
  <img src={`/images/profilePictures/${posterInfo.profile_picture}`} className="align-self-start mr-3" alt="..." height="100px" width="100px" />
  <div className="media-body">
    <a href="#" onClick={() => handleFriendClick(posterID)} className="mt-0">{`${posterInfo.Fname} ${posterInfo.Lname}`}</a>
    <p>{postTime}</p>
  </div>
</div>
	)
}

const Post = ({post, setCurrentPage, setRequestedID}) => {
	return(
		<div style={{display: "inline-flex"}}>
			 <PosterInfo posterID={post.posted_by} postTime={post.time} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID}/>			 
  <div className="card" style={{ width: "18rem" }}>
	  {post.image_content &&
  <img src={`/images/postPictures/${post.image_content}`} className="card-img-top" alt="..." />}
  <div className="card-body">
    <p className="card-text">
	{post.text_content}
    </p>
  </div>
</div>
			</div>
	)
}

export default Post