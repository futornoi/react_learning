import React from "react";
import {connect} from "react-redux";
import {follow, getUser, pageChang, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {getCount, getFollowingIsProgress, getIsFetching, getPage, getTotalPages, getUsers} from "../../redux/users-selectors";



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
      users: getUsers(state),
      count: getCount(state),
      page: getPage(state),
      isFetching: getIsFetching(state),
      followingIsProgress: getFollowingIsProgress(state),
      totalPages: getTotalPages(state),
   };
};


export default compose(
   connect(mapStateToProps, {follow, unfollow, pageChang, getUser}),
)(UsersContainer);