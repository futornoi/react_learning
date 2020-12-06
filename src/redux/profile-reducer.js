const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 3,
                imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
                message: state.newPostText,
                likesCount: 0,
            }

            if (newPost.message === '') {
                return ''
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData];
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;