import React, { useState, useEffect } from "react";
import {getFriends, unfriend} from "../services/dataController"
const Friends = ({setCurrentPage, setRequestedID}) => {
    const [friends, setFriends] = useState(null)
    useEffect(() => {
        getFriends().then(response => setFriends(response.data))
    }, [])
    const handleFriendClick = (ID) => {
        setCurrentPage("profilePage")
        setRequestedID(ID)
    }
    if(friends === null){
        return(<div>loading...</div>)
    }
    const handleAction = (ID) => {

        unfriend(ID).then(f => getFriends().then(response => 
            setFriends(response.data)))
        
    }
    const friendsTable = friends.map(f => (
        <tr key={f.ID}>
										<td>
											<a href="#" onClick={() => handleFriendClick(f.ID)}>{f.Fname} {f.Lname}</a>
										</td><td>
											<a href="#" className={"text-danger"} onClick={() => handleAction(f.ID)}>Unfriend</a>
										</td>
									</tr>
    ))
    
	return (
		<div className="container">
			<div>
							<table className="table">
								<thead>
									<tr>
                                    <th scope="col">Friends</th>
                                    <th scope="col">Action</th>
									</tr>
								</thead>
								<tbody>
									{friendsTable}
								</tbody>
							</table>
						</div>
		</div>
	);
};
export default Friends;
