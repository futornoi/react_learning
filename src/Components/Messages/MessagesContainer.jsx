import {sendMessage, UpdateNewChatText} from "../../redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withLoginRedirect} from "../../hoc/withLoginRedirect";
import {compose} from "redux";


   let mapStateToProps = (state) => {
      return {
         dialogData: state.messagesPage.dialogData,
         chatData: state.messagesPage.chatData,
         newChatText: state.messagesPage.newChatText,
         signIn: state.auth.signIn,
      }
   };

export default compose(
   connect(mapStateToProps, {sendMessage, UpdateNewChatText}),
   withLoginRedirect
)(Messages);