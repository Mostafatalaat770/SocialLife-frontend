import React, { useState } from "react";
import { logout } from "../services/dataController"
import "../css/bootstrap/bootstrap.min.css";
const Nav = ({ currentUser, setCurrentPage, setRequestedID, setSearchMode, setSearchQuery }) => {
	const [searchIndicator, setsearchIndicator] = useState("Name");
    const [searchType, setSearchType] = useState(1);
    const [searchText, setSearchtext] = useState("")
    
    const searchSubmit = (event) => {
        event.preventDefault()
        console.log(setSearchMode, setSearchQuery, setCurrentPage);
        setSearchQuery(searchText)
        setSearchMode(searchType)
        setCurrentPage("searchPage")
    }
    const handleSearchText = (event) => {
        setSearchtext(event.target.value)
    }
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<span className="navbar-brand mb-0 h1">Social Life</span>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a
							className="nav-link"
							href="#"
							onClick={() => {
								setCurrentPage("homePage");
							}}
						>
							Home <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a
							className="nav-link"
							href="#"
							onClick={() => {
                                setCurrentPage("profilePage");
                                setRequestedID(currentUser.ID)
							}}
						>
							Profile
						</a>
					</li>

					<li className="nav-item">
						<a className="nav-link" href="#"
                        onClick={() => {
                            setCurrentPage("friendsPage");
                        }}>
							Friends
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#"
                        onClick={() => {
                            setCurrentPage("friendRequestsPage");
                        }}>
							Friends Requests
						</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0" onSubmit={searchSubmit}>
                <ul className="navbar-nav mr-auto">
                    <li className ="nav-item"></li>
                    <a className="nav-link" href="#"
                        onClick={() => {
                            logout().then(setCurrentPage("login"))
                        }}>
							Logout
						</a>
                    </ul>
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Search"
                        aria-label="Search"
                        onChange={handleSearchText}
					/>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							{searchIndicator}
						</button>
						<div
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButton"
						>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									setsearchIndicator("Name");
									setSearchType(1);
								}}
							>
								Name
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									setsearchIndicator("Email");
									setSearchType(2);
								}}
							>
								Email
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									setsearchIndicator("Phone Number");
									setSearchType(3);
								}}
							>
								Phone Number
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									setsearchIndicator("Hometown");
									setSearchType(4);
								}}
							>
								Hometown
							</a>
							<a
								className="dropdown-item"
								href="#"
								onClick={() => {
									setsearchIndicator("Caption");
									setSearchType(5);
								}}
							>
								Caption
							</a>
						</div>
					</div>

					<button
						className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
					>
						Search
					</button>
				</form>
			</div>
		</nav>
	);
};
export default Nav;
