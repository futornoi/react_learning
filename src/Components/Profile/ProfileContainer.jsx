import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from 'react-router-dom'




class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.getUserProfile(userId)
   }

   render() {

      if(!this.props.signIn) return <Redirect to='/login'/>;

      return (
         <Profile {...this.props}/>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      usersProfile: state.profilePage.usersProfile,
      signIn: state.auth.signIn,
   }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer);
