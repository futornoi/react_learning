import React from 'react';
import {connect} from "react-redux";
import {setUsersProfile, userProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import withRouter from "react-router-dom/es/withRouter";




class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.userProfile(userId)
   }

   render() {
      return (
         <Profile {...this.props}/>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      usersProfile: state.profilePage.usersProfile,
   }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile, userProfile})(WithUrlDataProfileContainer);
