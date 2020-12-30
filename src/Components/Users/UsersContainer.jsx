import React from "react";
import {connect} from "react-redux";
import {follow, getUser, pageChang, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.getUser(this.props.page, this.props.count)
   }

   onPageChanger = (pageNumber) => {
      this.props.pageChang(pageNumber, this.props.count)
   }

   render() {
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
   };
};


export default connect(mapStateToProps, {follow, unfollow, pageChang, getUser})(UsersContainer);