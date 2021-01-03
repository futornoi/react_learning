import React from "react";
import {connect} from "react-redux";
import {follow, getUser, pageChang, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";
import {Redirect} from "react-router-dom";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUser(this.props.page, this.props.count)
   }

   onPageChanger = (pageNumber) => {
      this.props.pageChang(pageNumber, this.props.count)
   }

   render() {
      if(!this.props.signIn) return <Redirect to='/login'/>;


      return <Users
         users={this.props.users}
         count={this.props.count}
         page={this.props.page}
         onPageChanger={this.onPageChanger}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
         isFetching={this.props.isFetching}
         followingIsProgress={this.props.followingIsProgress}
         totalPages={this.props.totalPages}
      />
   }
}


let mapStateToProps = (state) => {

   return {
      users: state.usersPage.users,
      count: state.usersPage.count,
      page: state.usersPage.page,
      isFetching: state.usersPage.isFetching,
      followingIsProgress: state.usersPage.followingIsProgress,
      totalPages: state.usersPage.totalPages,
      signIn: state.auth.signIn,
   };
};


export default connect(mapStateToProps, {follow, unfollow, pageChang, getUser})(UsersContainer);