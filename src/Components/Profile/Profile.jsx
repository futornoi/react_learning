import React from 'react';
import AboutMe from "./AboutMe/AboutMe";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {
   return (
        <div>
            {/*AboutMe*/}
            <AboutMe usersProfile={props.usersProfile}/>
            {/*MyPosts*/}
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
