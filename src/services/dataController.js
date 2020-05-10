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

export {
    login,
    signup,
    getCurrentProfile,
    updateCurrentProfile
}