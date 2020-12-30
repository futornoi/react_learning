import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';



let initialState = {
   id: null,
   login: null,
   email: null,
   signIn: false,
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET-USER-DATA':
         return {
            ...state,
            ...action.data,
            signIn: true,
         }
      default:
         return state;
   }
}

//ActionCreator
export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email}})

//ThunkCreator
export const SignIn = () => {
   return (dispatch) => {
      authAPI.login().then(data => {
         if(data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setAuthUserData(id, login, email))
         }
      })
   }
}


export default authReducer;