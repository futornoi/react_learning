import React from 'react';
import s from './Messages.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Chat from "./Chat/Chat";
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";


const maxLength100 = maxLength(100);
const Textarea = Element('textarea')

const MessageForm = (props) => {


   return (
      <form onSubmit={props.handleSubmit} className={s.sending}>
         <Field component={Textarea}
                placeholder="your message" name="sending" id="sending" cols="70" rows="2"
                validate={[required, maxLength100]}
         />
         <button>send</button>
      </form>
   )
}


let MessageReduxForm = reduxForm({form: 'dialogForm'})(MessageForm);


const Messages = (props) => {

   let dialogElements = props.dialogData.map(d => <DialogItem id={d.id} name={d.name}/>);
   let chatElements = props.chatData.map(c => <Chat message={c.message}/>);

   let sendMessage = (value) => {
      props.sendMessage(value.sending);
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
            <MessageReduxForm onSubmit={sendMessage}/>
         </div>

      </div>
   );
}


export default Messages;