const SEND_MESSAGE= 'SEND-MESSAGE';


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
};

const messagesReducer = (state = initialStore, action) => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage = {
                id: 5,
                message: action.newChatText,
            }
            return {
                ...state,
                chatData: [...state.chatData, newMessage],
            }
        default:
            return state;
    }
}


export const sendMessage = (newChatText) => ({type: SEND_MESSAGE, newChatText});


export default messagesReducer;