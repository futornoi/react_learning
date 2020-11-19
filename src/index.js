import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    sendMessage={store.sendMessage.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                    updateNewChatText={store.updateNewChatText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getStore());

store.subscribe(rerenderEntireTree)

reportWebVitals();
