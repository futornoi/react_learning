import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import {sendMessageActionCreator, UpdateNewChatTextActionCreator} from "../../redux/messages-reducer";

function Messages(props) {

    let dialogElements = props.messagePage.dialogData.map(d => <DialogItem id={d.id} name={d.name}/>);
    let chatElements = props.messagePage.chatData.map(c => <Chat message={c.message}/>);

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.dispatch(UpdateNewChatTextActionCreator(text));
    }

    return (
        <div className={s.messages}>
            <div className={s.dialogItems}>
                <h2 className={s.title}>Dialogs</h2>
                <ul>
                    {dialogElements}
                </ul>
            </div>
            <div className={s.vl}/>
            <div className={s.chatItems}>
                <div className={s.message}>
                    {chatElements}
                </div>
                <div className={s.sending}>
               <textarea placeholder="your message" name="sending" id="sending" cols="70" rows="2"
                         autoFocus
                         value={props.messagePage.newChatText}
                         onChange={onChangeMessage}/>
                    <button onClick={sendMessage}>send</button>
                </div>
            </div>

        </div>
    );
}


export default Messages;