import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import Profile from "./Profile";
import withRouter from "react-router-dom/es/withRouter";



class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.match.params.userId;
      if(!userId) {
        userId = 2;
      }

      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
         this.props.setUsersProfile(response.data)
      })
   }

   render() {
      return (
         <Profile {...this.props} usersProfile={this.props.usersProfile}/>
      );
   }
}

let mapStateToProps = (state) => {
   return {
      usersProfile: state.profilePage.usersProfile,
   }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUsersProfile})(WithUrlDataProfileContainer);
