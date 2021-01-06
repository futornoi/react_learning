import React from 'react';
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import withRouter from "react-router-dom/es/withRouter";
import {Redirect} from 'react-router-dom'
import {withLoginRedirect} from "../../hoc/withLoginRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.getUserProfile(userId)
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


export default compose(
   connect(mapStateToProps, {getUserProfile}),
   withRouter,
   withLoginRedirect,
)(ProfileContainer)