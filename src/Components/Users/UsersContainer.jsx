import {connect} from "react-redux";
import {followAC, pageChangerAC, setUsersAC, totalCountAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";




let mapStateToState = (state) => {
   return {
      users: state.usersPage.users,
      count: state.usersPage.count,
      page: state.usersPage.page,
      totalPages: state.usersPage.totalPages
   };
};

let mapDispatchToState = (dispatch) => {
   return {
      followed: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
      pageChanger: (page) => dispatch(pageChangerAC(page)),
      totalCount: (totalCount) => dispatch(totalCountAC(totalCount)),
   }
};


export default connect(mapStateToState, mapDispatchToState)(Users);