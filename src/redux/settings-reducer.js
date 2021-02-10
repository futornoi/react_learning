import {settingsAPI} from "../api/api";
import {setUserPhoto} from "./profile-reducer";



let initialState = {};


const settingsReducer = (state = initialState, action) => {

};


export const savePhoto = (fileName) => async (dispatch) => {

   let data = await settingsAPI.uploadPhoto(fileName)

   if (data.resultCode === 0) {
      dispatch(setUserPhoto(data.data.photos))
   }
}


export default settingsReducer;