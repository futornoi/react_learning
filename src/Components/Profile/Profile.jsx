import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import AboutMe from "./AboutMe/AboutMe";


function Profile(props) {
   return (
        <div>
            {/*AboutMe*/}
            <AboutMe />
            {/*MyPosts*/}
            <MyPosts
               postData ={props.profilePage.postData}
               newPostText ={props.profilePage.newPostText}
               addPost={props.addPost}
               updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;
