const SEND_MESSAGE= 'SEND-MESSAGE';
const UPDATE_NEW_CHAT_TEXT = 'UPDATE-NEW-CHAT-TEXT';


const messagesReducer = (store, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 5,
                message: store.newChatText,
            }
            store.chatData.push(newMessage);
            store.newChatText = '';
            return store;
        case 'UPDATE-NEW-CHAT-TEXT':
            store.newChatText = action.messages;
            return store;
        default:
            return store;
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const UpdateNewChatTextActionCreator = (text) => ({type: UPDATE_NEW_CHAT_TEXT, messages: text});


export default messagesReducer;