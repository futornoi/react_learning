import React from "react";
import {connect} from "react-redux";
import {following, pageChanger, setUsers, totalCount, totalIsFetching, unfollow,} from "../../redux/users-reducer";
import Users from "./Users";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.totalIsFetching(true)

     usersAPI.setUser(this.props.page, this.props.count).then(response => {
         this.props.totalIsFetching(false)
         this.props.setUsers(response.data.items);
         // this.props.totalCount(response.data.totalCount);
      })
   }

   onPageChanger = (pageNumber) => {
      this.props.totalIsFetching(true)
      this.props.pageChanger(pageNumber)

      usersAPI.setUser(pageNumber, this.props.count).then(response => {
         this.props.totalIsFetching(false)
         this.props.setUsers(response.data.items);
      })
   }

   render() {
      return   <Users
            users={this.props.users}
            totalPages={this.props.totalPages}
            count={this.props.count}
            page={this.props.page}
            onPageChanger={this.onPageChanger}
            unfollow={this.props.unfollow}
            following={this.props.following}
            isFetching={this.props.isFetching}
         />
   }
}


let mapStateToProps = (state) => {

   return {
      users: state.usersPage.users,
      count: state.usersPage.count,
      page: state.usersPage.page,
      totalPages: state.usersPage.totalPages,
      isFetching: state.usersPage.isFetching,
   };
};


export default connect(mapStateToProps, {following, unfollow, setUsers, pageChanger, totalCount, totalIsFetching,})(UsersContainer);