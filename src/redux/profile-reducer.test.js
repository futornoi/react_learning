import profileReducer, {addPost, deletePost} from "./profile-reducer";


let state = {
   postData: [
      {
         id: 1,
         imgSrc: 'https://www.meme-arsenal.com/memes/1f8bcb1ffd738deb59afda95521079a9.jpg',
         message: 'hi, hove are you?',
         likesCount: 181,
      },],
   userStatus: ''
};

test('new post should be added', () => {

   let action = addPost('helloMax')

  let newState = profileReducer(state, action)

   expect(newState.postData[1].message).toBe('helloMax')
});

test('new post should be deleted', () => {

   let action = deletePost(1)

  let newState = profileReducer(state, action)

   expect(newState.postData.length).toBe(0)
});



