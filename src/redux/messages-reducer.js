const SEND_MESSAGE= 'SEND-MESSAGE';
const UPDATE_NEW_CHAT_TEXT = 'UPDATE-NEW-CHAT-TEXT';


let initialStore = {
    dialogData: [
        {id: 1, name: 'Maks'},
        {id: 2, name: 'Artur'},
        {id: 3, name: 'Vika'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Sergey'},
        {id: 6, name: 'Вася'},
    ],
    chatData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Have are you?'},
        {id: 3, message: 'Abra kadabra'},
        {id: 4, message: 'Abra '},
    ],
    newChatText: '',
};

const messagesReducer = (store = initialStore, action) => {
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