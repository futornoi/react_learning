import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Element} from "../../common/FormsControls/FormsControls";

const maxLength20 = maxLength(20);
const Textarea = Element('textarea')

const MyPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={s.post}>
         <Field
            component={Textarea}
            placeholder="you news..." name="post" id="post" cols="100" rows="2"
            validate={[required, maxLength20]}
         />

         <button>Send</button>
      </form>
   )
}

const MyPostReduxForm = reduxForm({form: 'messageForm'})(MyPostForm)

const MyPosts = props => {

   let postElements = props.postData.map(p => <Post img_src={p.imgSrc} key={p.id} message={p.message} likesCount={p.likesCount}/>);

   let addPost = (value) => {
      props.addPost(value.post);
   }

   return (
      <div className={s.sending}>
         <div className={s.myPost}>
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
};

export default MyPosts;
