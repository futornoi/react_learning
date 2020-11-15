import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, sendMessage, updateNewChatText, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
   ReactDOM.render(
      <React.StrictMode>
         <BrowserRouter>
            <App
               state={state}
               addPost={addPost}
               sendMessage={sendMessage}
               updateNewPostText={updateNewPostText}
               updateNewChatText={updateNewChatText}/>
         </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
   );
}