import axios from 'axios'

const url = "http://localhost:3001"

const login = (input) => {
    return axios.post(`${url}/login`, input).then(response => response)
}
const signup = (input) => {
    return axios.post(`${url}/signup`, input).then(response => response)
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
export {
    login,
    signup,
    updateCurrentProfile,
    getUserByID,
    getUserInfoByID,
    addPublicPost,
    addPrivatePost,
    acceptFriendRequest,
    sendFriendRequest,
    deleteFriendRequest,
    unfriend,
    getFriendsPosts
}