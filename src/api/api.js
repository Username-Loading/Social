import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "32e67def-e270-4c33-9784-b8b0f0ac0bec"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const UserAPI = {
    getUser(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&current=${pageSize}`)
            .then(response => { return response.data })
    },
    loginMeAPI() {
        return instance.get(`auth/me`)
            .then(response => { return response.data })
    },
    postFollowAPI(id) {
        return instance.post(`follow/${id}`)
            .then(response => { return response.data })
    },
    deleteFollowAPI(id) {
        return instance.delete(`follow/${id}`)
            .then(response => { return response.data })
    },
    profileId(id) {
        return ProfileAPI.profileId(id)
    }, 
    login(email, password, rememberMe) {
        return instance.post(`auth/login`, {email, password, rememberMe})
        .then(response => {return response.data})
    },
    logout(){
        return instance.delete(`auth/login`)
        .then(response => {return response.data})
    },

}

export const ProfileAPI = {
    profileId(id) {
        return instance.get(`profile/${id}`)
            .then(response => { return response.data })
    },
    getStatus(id) {
        return instance.get(`/profile/status/${id}`)
        .then(response => {return response.data})
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}
