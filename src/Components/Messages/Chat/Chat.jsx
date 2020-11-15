import React from 'react';
import s from './../Messages.module.css';



const Chat = (props) => {
   return (
      <div className={s.messages}>{props.message}</div>
   );
}



export default Chat;