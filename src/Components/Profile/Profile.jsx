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
               dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
