import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


let reducers = combineReducers({
   profilePage: profileReducer,
   messagesPage: messagesReducer,
   usersPage: usersReducer,
   auth: authReducer,
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

window.store = store

export default store;
