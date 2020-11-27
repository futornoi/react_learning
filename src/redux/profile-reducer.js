const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (store, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 3,
                imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
                message: store.newPostText,
                likesCount: 0,
            }

            if (newPost.message === '') {
                return ''
            }
            store.postData.push(newPost);
            store.newPostText = '';
            return store;
        case 'UPDATE-NEW-POST-TEXT':
            store.newPostText = action.newText;
            return store;
        default:
            return store;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;