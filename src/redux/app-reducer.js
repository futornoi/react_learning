import {SignIn} from "./auth-reducer";

const INITIALIZATION = 'INITIALIZATION';



let initialState = {
   initialization: false,
};

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'INITIALIZATION':
         return {
            ...state,
            initialization: true,
         }
      default:
         return state;
   }
}

//ActionCreator
export const endOfInitialization = () => ({type: INITIALIZATION})

//ThunkCreator
export const initializeApp = () => (dispatch) => {
   let promises = dispatch(SignIn());

   Promise.all([promises]).then(() => {
      dispatch(endOfInitialization())
   })
}

export default appReducer;