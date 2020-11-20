let store = {
    _callSubscriber() {},
    _state: {

        profilePage: {
            postData: [
                {
                    id: 1,
                    imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
                    message: 'hi, hove are you?',
                    likesCount: 181,
                },
                {
                    id: 2,
                    imgSrc: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                    message: 'i fine, th\'x ',
                    likesCount: 110,
                },],
            newPostText: '',
        },

        messagesPage: {
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
        },
    },
    getStore() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        debugger
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }

            if (newPost.message === '') {
                return ''
            }

            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === 'SEND-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.messagesPage.newChatText,
            }
            this._state.messagesPage.chatData.push(newMessage);
            this._state.messagesPage.newChatText = '';
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-CHAT-TEXT') {
            this._state.messagesPage.newChatText = action.messages;
            this._callSubscriber(this._state)
        }
    }


}


export default store;
window.store = store;