import * as axios from "axios";


const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "0b9c4dda-69fd-4618-a5bd-e83834b7b6c8"
   },
})
export const usersAPI = {

   setUser(page = 1, count = 10) {
      return instance.get(`users?page=${page}&count=${count}`).then(response => {
         return response.data
      })
   },

   unfollowUser(id) {
      return instance.delete(`follow/${id}`)
   },

   followUser(id) {
      return instance.post(`follow/${id}`)
   }
}

export const authAPI = {
   login() {
      return instance.get('auth/me').then(response => {
         return response.data
      })
   }
}

export const profileAPI = {
   profileUser(id = 13271) {
      return instance.get(`profile/${id}`).then(promises => {
         return promises.data
      })
   }
}