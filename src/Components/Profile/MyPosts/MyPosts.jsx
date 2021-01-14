import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";


const MyPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.post}>
         <Field component='textarea' placeholder="you news..." name="post" id="post" cols="100" rows="2"/>
         <button>Send</button>
      </form>
   )
}

const MyPostReduxForm = reduxForm({form: 'messageForm'})(MyPostForm)

function MyPosts(props) {

   let postElements = props.postData.map(p => <Post img_src={p.imgSrc} message={p.message} likesCount={p.likesCount}/>);

   let addPost = (value) => {
      props.addPost(value.post);
   }

   return (
      <div className={s.sending}>
         <div className={s.my_post}>
            <div className={s.title}>
               <label htmlFor="post">My post</label>
            </div>
            <MyPostReduxForm onSubmit={addPost}/>
         </div>
         <div className={s.postItem}>
            {postElements}
         </div>
      </div>
   );
}

export default MyPosts;
