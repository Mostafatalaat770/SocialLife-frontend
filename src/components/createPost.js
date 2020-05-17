import React, { useState, useEffect } from "react";
import {addPrivatePost, addPublicPost, uploadPostPicture} from "../services/dataController"
const CreatePost = ({ currentUser, setCurrentPage }) => {
    const [textContent, setTextContent] = useState("")
    const [isPublic, setIsPublic] = useState("true")
    const PostPictureImage = React.createRef();

    const createPost = (event) => {
        event.preventDefault()
        if(isPublic === "true"){
            addPublicPost({"text_content": textContent}).then((res) => {
                const postPicture = new FormData()
                postPicture.append("postPicture", PostPictureImage.current.files[0])
                uploadPostPicture(postPicture, res.data.post_ID, isPublic).then(res => 
                {
                setCurrentPage("homePage");}
                )
            });
        }
        else{
            addPrivatePost({"text_content": textContent}).then((res) => {
                const postPicture = new FormData()
                postPicture.append("postPicture", PostPictureImage.current.files[0])
                uploadPostPicture(postPicture, res.data.post_ID, isPublic).then(res => 
                {
                setCurrentPage("homePage");}
                )
            });
        }
    }
	return (
		<div className="container">
			<h2>Hi {currentUser.Fname}!</h2>
			<h3>What's on ur mind?</h3>
			<form onSubmit={createPost}>
				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1"></label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows={3}
                        defaultValue={""}
                        value={textContent}
                        onChange={(event) => setTextContent(event.target.value)}
					/>
				</div>

				<div className="input-group mb-3">
					<div className="input-group-prepend">
						<span
							className="input-group-text"
							id="inputGroupFileAddon01"
						>
							Upload a picture
						</span>
					</div>
					<div className="custom-file">
						<input
							type="file"
							className="custom-file-input"
                            id="inputGroupFile01"
                            name="postPicture"
                            aria-describedby="inputGroupFileAddon01"
                            ref={PostPictureImage}
						/>
						<label
							className="custom-file-label"
							htmlFor="inputGroupFile01"
						>
							Choose file
						</label>
					</div>
                </div>
                <div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                    value="true"
                    onChange={() => setIsPublic("true")}

                  />
                  <label className="custom-control-label" htmlFor="customRadioInline1">
                    Public
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    id="customRadioInline2"
                    name="customRadioInline1"
                    className="custom-control-input"
                    value="false"
                    onChange={() => setIsPublic("false")}
                  />
                  <label className="custom-control-label" htmlFor="customRadioInline2">
                    Private
                  </label>
                </div>
              </div>
              <button className="btn btn-primary btn-lg" type="submit">Create</button>

			</form>
		</div>
	);
};
export default CreatePost