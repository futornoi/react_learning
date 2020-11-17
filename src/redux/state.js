export let rerenderEntireTree = () => {
    console.log("state changed")
}

let state = {

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
}

export const addPost = () => {

    let newPost = {
        id: 3,
        imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
        message: state.profilePage.newPostText,
        likesCount: 0,
    }

    if (newPost.message === '') {
        return ''
    }

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const sendMessage = () => {
    let newMessage = {
        id: 5,
        message: state.messagesPage.newChatText,
    }
    state.messagesPage.chatData.push(newMessage);
    state.messagesPage.newChatText = '';
    rerenderEntireTree(state)
}

export const updateNewChatText = (messages) => {
    state.messagesPage.newChatText = messages;
    rerenderEntireTree(state)
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state