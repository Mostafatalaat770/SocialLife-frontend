import React, { useState, useEffect } from "react";
import { getFriendsPosts } from "../services/dataController";
import Post from "./post";
const HomePage = ({setCurrentPage, setRequestedID}) => {
	const [postsData, setPostsData] = useState(null);

	useEffect(() => {
		getFriendsPosts().then((response) => setPostsData(response.data));
    }, []);


	if (postsData === null) return <div>loading...</div>;

	const posts = postsData.map((post) => 
(		<li className="list-group-item">
		<Post post={post} key={post.Post_ID} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
		</li>)
	);

	return (
		<div className="container">
			<ul className="list-group list-group-flush">{posts}</ul>
		</div>
	);
};
export default HomePage;
