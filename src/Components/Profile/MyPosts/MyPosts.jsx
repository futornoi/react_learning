import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'


function MyPosts(props) {

   let postElements = props.postData.map(p => <Post img_src={p.imgSrc} message={p.message} likesCount={p.likesCount}/>);

   let addPost = () => {
      props.addPost();
   }

   let onChangePost = (e) => {
      let text = e.target.value;
      props.onChangePost(text);
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
