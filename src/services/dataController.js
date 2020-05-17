import axios from 'axios'

const url = "http://localhost:3001"

const login = (input) => {
    return axios.post(`${url}/login`, input).then(response => response)
}
const signup = (input) => {
    return axios.post(`${url}/signup`, input).then(response => response)
}
const logout = () => {
    return axios.post(`${url}/logout`,).then(response => response)
}
const uploadProfilePicture = (formData) => {
    return axios({
        method: "POST",
        url: `${url}/upload/profilePicture`,
        data: formData,
        headers: {
            'content-type': `multipart/form-data;`,
            }
      }).then(response => response)
}
const updateCurrentProfile = (updatedData) => {
   return axios.put(`${url}/profile/edit`, updatedData).then(response => response)
}
const getUserByID = (ID) => {
    return axios.get(`${url}/user/${ID}`).then(response => response)
}
const getUserInfoByID = (ID) => {
    return axios.get(`${url}/user/${ID}/info`).then(response => response)
}
const addPublicPost = (post) => {
    return axios.post(`${url}/posts/public`, post).then(response => response)
}
const addPrivatePost = (post) => {
    return axios.post(`${url}/posts/private`, post).then(response => response)
}
const getFriends = () =>{
    return axios.get(`${url}/user/friend`).then(response=>response)
}
const getFriendsRequest = () =>{
    return axios.get(`${url}/user/friendRequest`).then(response=>response)
}
const acceptFriendRequest = (FriendID) => {
    return axios.post(`${url}/user/${FriendID}/acceptFriendRequest`).then(response => response)
}
const sendFriendRequest = (FriendID) => {
    return axios.post(`${url}/user/${FriendID}/sendFriendRequest`).then(response => response)
}
const deleteFriendRequest = (FriendID) => {
    return axios.delete(`${url}/user/${FriendID}/deleteFriendRequest`).then(response => response)
}
const unfriend = (FriendID) => {
    return axios.delete(`${url}/user/${FriendID}/unfriend`).then(response => response)
}
const getFriendsPosts = () => {
    return axios.get(`${url}/homepage`).then(response => response)
}
const searchByMode = (mode, query) => {
    const data = {searchType: mode, key: query}
    console.log(data);
    return axios.get(`${url}/search/${mode}/${query}`).then(response => response)
}
export {
    login,
    signup,
    logout,
    uploadProfilePicture,
    updateCurrentProfile,
    getUserByID,
    getUserInfoByID,
    addPublicPost,
    addPrivatePost,
    getFriends,
    getFriendsRequest,
    acceptFriendRequest,
    sendFriendRequest,
    deleteFriendRequest,
    unfriend,
    getFriendsPosts,
    searchByMode
}