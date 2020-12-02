import React from 'react';
import {sendMessageActionCreator, UpdateNewChatTextActionCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";

function MessagesContainer(props) {

   let state = props.store.getState();

   let sendMessage = () => {
      props.store.dispatch(sendMessageActionCreator());
   }

   let onChangeMessage = (text) => {
      props.store.dispatch(UpdateNewChatTextActionCreator(text));
   }

   return (<Messages
      sendMessage={sendMessage}
      onChangeMessage={onChangeMessage}
      dialogData={state.messagesPage.dialogData}
      chatData={state.messagesPage.chatData}
      newChatText={state.messagesPage.newChatText}/>);
}


export default MessagesContainer;