import React from 'react';
import AboutMe from "./AboutMe/AboutMe";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


function Profile(props) {

   return (
        <div>
            {/*AboutMe*/}
            <AboutMe usersProfile={props.usersProfile} putUserProfile={props.putUserProfile} isOwner={props.isOwner} userStatus={props.userStatus} putUserStatus={props.putUserStatus}/>
            {/*MyPosts*/}
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
