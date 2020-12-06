import React from 'react';
import AboutMe from "./AboutMe/AboutMe";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile() {
   return (
        <div>
            {/*AboutMe*/}
            <AboutMe />
            {/*MyPosts*/}
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
