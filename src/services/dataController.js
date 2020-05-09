import axios from 'axios'

const url = "https://localhost:3001"

const login = (input) => {
    return axios.post(url, input).then(response => response)
}
const signup = (input) => {
    return axios.post(`${url}/signup`, input).then(response => response)
}
const getCurrentProfile = () => {
   return axios.get(`${url}/profile`).then(response => response)
}
const updateCurrentProfile = (updatedData) => {
   return axios.put(`${url}/profile/edit`, updatedData).then(response => response)
}

export {
    login,
    signup,
    getCurrentProfile,
    updateCurrentProfile
}