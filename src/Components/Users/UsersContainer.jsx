import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";




let mapStateToState = (state) => {
   return {
      users: state.usersPage.users,
   };
};

let mapDispatchToState = (dispatch) => {
   return {
      followed: (userId) => dispatch(followAC(userId)),
      unfollow: (userId) => dispatch(unfollowAC(userId)),
      setUsers: (users) => dispatch(setUsersAC(users)),
   }
};


export default connect(mapStateToState, mapDispatchToState)(Users);