import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";


function Messages(props) {

   let dialogElements = props.messagePage.dialogData.map(d => <DialogItem id={d.id} name={d.name}/>);
   let chatElements = props.messagePage.chatData.map(c => <Chat message={c.message}/>);

   let sendElement = React.createRef();

   let sendMessage = () => {
      props.sendMessage();
   }

   let onChangeMessage = () => {
      let text = sendElement.current.value;
      props.updateNewChatText(text);
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
            {chatElements}
            <div className={s.sending}>
               <textarea placeholder="your message" name="sending" id="sending" cols="70" rows="2"
                         value={props.messagePage.newChatText}
                         onChange={ onChangeMessage }
                         ref={sendElement}/>
               <button onClick={sendMessage}>send</button>
            </div>
         </div>

      </div>
   );
}


export default Messages;