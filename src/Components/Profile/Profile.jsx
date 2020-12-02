import React from 'react';
import AboutMe from "./AboutMe/AboutMe";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
   return (
        <div>
            {/*AboutMe*/}
            <AboutMe />
            {/*MyPosts*/}
            <MyPostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;
