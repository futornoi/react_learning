import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'


function    MyPosts(props) {

   let postElements = props.postData.map(p => <Post img_src={p.imgSrc} message={p.message} likesCount={p.likesCount}/>);
   let newPostElement = React.createRef()


   let addPost = () => {
      props.dispatch({type: 'ADD-POST'});
   }

   let onChangePost = () => {
      let text = newPostElement.current.value;
      let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      props.dispatch(action);
   }

   return (
      <div className={s.sending}>
         <div className={s.my_post}>
            <div className={s.title}>
               <label htmlFor="post">My post</label>
            </div>
            <div className={s.post}>
               <textarea
                  placeholder="you news..." name="post" id="post" cols="100" rows="2"
                  value={props.newPostText}
                  ref={newPostElement}
                  onChange={onChangePost}/>
               <button onClick={addPost}>Send</button>
            </div>
         </div>
         <div className={s.postItem}>
            {postElements}
         </div>
      </div>
   );
}

export default MyPosts;
