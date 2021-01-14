import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_USERS_STATUS = 'SET-USERS-STATUS';


let initialState = {
   postData: [
      {
         id: 1,
         imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
         message: 'hi, hove are you?',
         likesCount: 181,
      },],
   usersProfile: null,
   userStatus: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'ADD-POST':
         let newPost = {
            id: 3,
            imgSrc: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
            message: action.newPostText,
            likesCount: 0,
         }
         return {
            ...state,
            postData: [...state.postData, newPost],
         };
      case 'SET-USERS-PROFILE':
         return {
            ...state,
            usersProfile: action.profile,
         }
      case 'SET-USERS-STATUS':
         return {
            ...state,
            userStatus: action.status,
         }
      default:
         return state;
   }
}

//ActionCreator
export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setUsersStatus = (status) => ({type: SET_USERS_STATUS, status})

//ThunkCreator
export const getUserProfile = (userId) => {
   return (dispatch) => {
      profileAPI.profileUser(userId).then(data => {
         dispatch(setUsersProfile(data))
      })
   }
}

export const getUserStatus = (userId) => {
   return (dispatch) => {
      profileAPI.profileStatus(userId).then(data => {
         dispatch(setUsersStatus(data))
      })
   }
}

export const putUserStatus = (status) => {
   return (dispatch) => {
      profileAPI.changeProfileStatus(status).then(data => {
         if(data.resultCode === 0) {
            dispatch(setUsersStatus(status))
         }
      })
   }
}




export default profileReducer;