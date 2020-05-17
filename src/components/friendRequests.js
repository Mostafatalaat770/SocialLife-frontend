import React, { useState, useEffect } from "react";
import {getFriendsRequest, deleteFriendRequest, acceptFriendRequest} from "../services/dataController"
const FriendRequests = ({setCurrentPage, setRequestedID}) => {
    const [friendRequests, setFriendRequests] = useState(null)
    useEffect(() => {
        getFriendsRequest().then(response => setFriendRequests(response.data))
    }, [])
    const handleFriendClick = (ID) => {
        setCurrentPage("profilePage")
        setRequestedID(ID)
    }
    if(friendRequests === null){
        return(<div>loading...</div>)
    }
    const handleAction = (ID, type) => {
		switch(type){
			case "confirm":
        acceptFriendRequest(ID).then(f => getFriendsRequest().then(response => 
			setFriendRequests(response.data)))
			break
			case "delete":
        deleteFriendRequest(ID).then(f => getFriendsRequest().then(response => 
            setFriendRequests(response.data)))
        }
    }
    const friendRequestsTable = friendRequests.map(f => (
        <tr key={f.ID}>
										<td>
											<a href="#" onClick={() => handleFriendClick(f.ID)}>{f.Fname} {f.Lname}</a>
										</td><td>
											<a href="#" className="text-success" onClick={() => handleAction(f.ID, "confirm")}>Confirm</a>
										</td><td>
											<a href="#" className="text-danger" onClick={() => handleAction(f.ID, "delete")}>Delete</a>
										</td>
									</tr>
    ))
    
	return (
		<div className="container">
			<div>
							<table className="table">
								<thead>
									<tr>
										<th scope="col">Friend Requests</th>
                                        <th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{friendRequestsTable}
								</tbody>
							</table>
						</div>
		</div>
	);
};
export default FriendRequests;
