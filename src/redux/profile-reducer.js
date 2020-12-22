const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';


let initialState = {
    postData: [
        {
            id: 1,
            imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
            message: 'hi, hove are you?',
            likesCount: 181,
        },],
    newPostText: '',
    usersProfile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                imgSrc: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: '',
            };
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newText,
            };
        case 'SET-USERS-PROFILE':
            return {
                ...state,
                usersProfile: action.profile,
                contacts: {...state.contacts},
            }
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export default profileReducer;