import {sendMessage, UpdateNewChatText} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


   let mapStateToProps = (state) => {
      return {
         dialogData: state.messagesPage.dialogData,
         chatData: state.messagesPage.chatData,
         newChatText: state.messagesPage.newChatText,
         signIn: state.auth.signIn,
      }
   };

   const MessagesContainer = connect(mapStateToProps, {sendMessage, UpdateNewChatText})(Messages)

export default MessagesContainer;