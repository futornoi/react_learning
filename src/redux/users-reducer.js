import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const PAGE_CHANGER = 'PAGE-CHANGER';
const TOTAL_COUNT = 'TOTAL-COUNT';
const TOTAL_FETCHING = 'TOTAL-FETCHING';
const TOTAL_FOLLOWING_IS_PROGRESS = 'TOTAL-FOLLOWING-IS-PROGRESS';


let initialState = {
   users: [],
   count: 10,
   page: 1,
   totalPages: 90,
   isFetching: false,
   followingIsProgress: [],
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'FOLLOW':
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.userId) {
                  return {
                     ...u,
                     followed: true,
                  }
               }
               return u;
            })
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return {
                     ...u,
                     followed: false,
                  }
               }
               return u;
            })
         }
      case 'SET-USERS':
         return {
            ...state,
            users: [...action.users]
         }
      case 'PAGE-CHANGER':
         return {
            ...state,
            page: action.page
         }
      case 'TOTAL-COUNT':
         return {
            ...state,
            totalPages: action.totalCount
         }
      case 'TOTAL-FETCHING':
         return {
            ...state,
            isFetching: action.isFetching,
         }
      case 'TOTAL-FOLLOWING-IS-PROGRESS':
         return {
            ...state,
            followingIsProgress: action.isFetching
               ? [...state.followingIsProgress, action.usersId]
               : state.followingIsProgress.filter(id => id != action.usersId)
         }
      default:
         return state;
   }
}

//ActionCreators
export const followingSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const pageChanger = (page) => ({type: PAGE_CHANGER, page})
export const totalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount})
export const totalIsFetching = (isFetching) => ({type: TOTAL_FETCHING, isFetching})
export const totalFollowingIsProgress = (isFetching, usersId) => ({type: TOTAL_FOLLOWING_IS_PROGRESS, isFetching, usersId})


//ThunkCreators
export const getUser = (page, count) => {
   return (dispatch) => {
      dispatch(totalIsFetching(true))

      usersAPI.setUser(page, count).then(data => {
         dispatch(totalIsFetching(false))
         dispatch(setUsers(data.items));
         // dispatch(totalCount(data.totalCount));
      })
   }
}

export const pageChang = (page, count) => {
   return (dispatch) => {
      dispatch(totalIsFetching(true))
      dispatch(pageChanger(page))

      usersAPI.setUser(page, count).then(data => {
         dispatch(totalIsFetching(false))
         dispatch(setUsers(data.items));
      })   }
}

export const unfollow = (userId) => {
   return (dispatch) => {
      dispatch(totalFollowingIsProgress(true, userId))
      usersAPI.unfollowUser(userId).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
         }
         dispatch(totalFollowingIsProgress(false, userId))
      })
   }

}

export const follow = (userId) => {
   return (dispatch) => {
      dispatch(totalFollowingIsProgress(true, userId))
      usersAPI.followUser(userId).then(response => {
         if (response.data.resultCode === 0) {
            dispatch(followingSuccess(userId))
         }
         dispatch(totalFollowingIsProgress(false, userId))
      })
   }
}



export default usersReducer;