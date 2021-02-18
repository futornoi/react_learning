import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET-USER-DATA';
const SET_CAPTCHA = 'auth/SET_CAPTCHA';

let initialState = {
   id: null,
   login: null,
   email: null,
   signIn: false,
   captcha: null,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'auth/SET-USER-DATA':
      case 'auth/SET_CAPTCHA':
         return {
            ...state,
            ...action.payload,
         }
      default:
         return state;
   }
}

//ActionCreator
export const setAuthUserData = (id, login, email, signIn) => ({type: SET_USER_DATA, payload: {id, login, email, signIn}})
export const setAuthCaptcha = (captcha) => ({type: SET_CAPTCHA, payload: {captcha}})

//ThunkCreator
export const SignIn = () => async (dispatch) => {

   let data = await authAPI.me()

   if (data.resultCode === 0) {
      let {id, login, email} = data.data;
      dispatch(setAuthUserData(id, login, email, true))
   }
}

export const logIn = (email, password, rememberMe, captcha) => async (dispatch) => {


   let data = await authAPI.loginAPI(email, password, rememberMe, captcha)
   if (data.resultCode === 0) {
      dispatch(SignIn())
   } else {
      if (data.resultCode === 10) {
         dispatch(getCaptcha());
      }
      dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'SOME ERROR'}))
   }

}

export const logout = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.logoutAPI(email, password, rememberMe)

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }

}


export const getCaptcha = () => async (dispatch) => {

   const data = await authAPI.captchaAPI();
   const captchaUrl = data.url;
   dispatch(setAuthCaptcha(captchaUrl))

}

export default authReducer;