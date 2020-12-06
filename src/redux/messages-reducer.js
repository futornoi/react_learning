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

const messagesReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage = {
                id: 5,
                message: state.newChatText,
            }
            let stateCopy = {...state};
            stateCopy.chatData = [...state.chatData]
            stateCopy.chatData.push(newMessage);
            stateCopy.newChatText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-CHAT-TEXT': {
            let stateCopy = {...state};
            stateCopy.newChatText = action.messages;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const UpdateNewChatTextActionCreator = (text) => ({type: UPDATE_NEW_CHAT_TEXT, messages: text});


export default messagesReducer;