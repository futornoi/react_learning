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
         return response.data;
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
   me() {
      return instance.get('auth/me').then(response => {
         return response.data
      })
   },

   loginAPI(email, password, rememberMe) {
      return instance.post('auth/login', {email, password, rememberMe}).then(response => {
         return response.data
      })
   },

   logoutAPI() {
      return instance.delete('auth/login')
   }
}



export const profileAPI = {
   profileUser(id) {
      return instance.get(`profile/${id}`).then(response => {
         return response.data
      })
   },

   profileStatus(id) {
      return instance.get(`profile/status/${id}`).then(response => {
         return response.data;
      })
   },

   changeProfileStatus(status) {
      return instance.put(`profile/status`, {status: status}).then(response => {
         return response.data;
      })
   },

   changeProfile(profileData) {
      return instance.put(`profile`, profileData).then(response => {
         return response.data;
      })
   }
}


export const settingsAPI = {
   uploadPhoto(fileName) {
      let formData = new FormData();
      formData.append("image", fileName);
      return instance.put('profile/photo', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      }).then(response => {
         return response.data;
      })
   }
}