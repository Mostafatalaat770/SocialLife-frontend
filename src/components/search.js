import React, { useState, useEffect } from "react";
import {searchByMode} from "../services/dataController"
import Post from "../components/post"
const Search = ({searchMode, searchQuery, setCurrentPage, setRequestedID}) => {
    
    const [searchResults, setSearchResults] = useState(null)
    useEffect(() => {searchByMode(searchMode, searchQuery).then(response => {
        setSearchResults(response.data)
    })}
,[])

if(searchResults === null){
    return <div>Loading...</div>
}
if(searchMode < 5){
    const handleResultClick = (ID) => {
        setCurrentPage("profilePage")
        setRequestedID(ID)
    }
const searchResultsTable = searchResults.map(r => (
    <tr key={r.ID}>
                                    <td>
                                        <a href="#" onClick={() => handleResultClick(r.ID)}>{r.Fname} {r.Lname}</a>
                                    </td>
                                </tr>
))

return (
    <div className="container">
        <div>
                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Search Results</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResultsTable}
                            </tbody>
                        </table>
                    </div>
    </div>
);
}
else{
const posts = searchResults.map((post) => (		<li className="list-group-item">
<Post post={post} key={post.Post_ID} setCurrentPage={setCurrentPage} setRequestedID={setRequestedID} />
</li>));
return(
    <div className="container">
			<ul className="list-group list-group-flush">{posts}</ul>
		</div>
)
}}
export default Search