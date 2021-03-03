import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";
import newsReducer from "./news-reducer";


let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   usersPage: usersReducer,
   auth: authReducer,
   app: appReducer,
   news: newsReducer,
   // settingPage: settingsReducer,
   form: formReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));


export default store;
