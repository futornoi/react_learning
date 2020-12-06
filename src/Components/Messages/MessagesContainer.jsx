import {sendMessageActionCreator, UpdateNewChatTextActionCreator} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


   let mapStateToProps = (state) => {
      return {
         dialogData: state.messagesPage.dialogData,
         chatData: state.messagesPage.chatData,
         newChatText: state.messagesPage.newChatText,
      }
   };

   let mapDispatchToProps = (dispatch) => {
      return {
         sendMessage: () => {dispatch(sendMessageActionCreator())},
         onChangeMessage: (text) => {dispatch(UpdateNewChatTextActionCreator(text))},
      }
   }

   const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;