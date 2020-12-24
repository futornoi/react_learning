import React from "react";
import {connect} from "react-redux";
import {followed, pageChanger, setUsers, totalCount, totalIsFetching, unfollow,} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.totalIsFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.count}`).then(response => {
         this.props.totalIsFetching(false)
         this.props.setUsers(response.data.items);
         // this.props.totalCount(response.data.totalCount);
      })
   }

   onPageChanger = (pageNumber) => {
      this.props.totalIsFetching(true)
      this.props.pageChanger(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`).then(response => {
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
            followed={this.props.followed}
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


export default connect(mapStateToProps, {followed, unfollow, setUsers, pageChanger, totalCount, totalIsFetching,})(UsersContainer);