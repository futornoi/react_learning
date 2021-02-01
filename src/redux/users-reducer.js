import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/ogject-helper";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET-USERS';
const PAGE_CHANGER = 'usersPage/PAGE-CHANGER';
const TOTAL_COUNT = 'usersPage/TOTAL-COUNT';
const TOTAL_FETCHING = 'usersPage/TOTAL-FETCHING';
const TOTAL_FOLLOWING_IS_PROGRESS = 'usersPage/TOTAL-FOLLOWING-IS-PROGRESS';


let initialState = {
   users: [],
   count: 10,
   page: 1,
   totalPages: 90,
   isFetching: false,
   followingIsProgress: [],
   fake: 10,
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'usersPage/FOLLOW':
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
         }
      case 'usersPage/UNFOLLOW':
         return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
         }
      case 'usersPage/SET-USERS':
         return {
            ...state,
            users: [...action.users]
         }
      case 'usersPage/PAGE-CHANGER':
         return {
            ...state,
            page: action.page
         }
      case 'usersPage/TOTAL-COUNT':
         return {
            ...state,
            totalPages: action.totalCount
         }
      case 'usersPage/TOTAL-FETCHING':
         return {
            ...state,
            isFetching: action.isFetching,
         }
      case 'usersPage/TOTAL-FOLLOWING-IS-PROGRESS':
         return {
            ...state,
            followingIsProgress: action.isFetching
               ? [...state.followingIsProgress, action.usersId]
               : state.followingIsProgress.filter(id => id !== action.usersId)
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
   return async (dispatch) => {
      dispatch(totalIsFetching(true))

      let data = await usersAPI.setUser(page, count)

      dispatch(totalIsFetching(false))
      dispatch(setUsers(data.items));
      // dispatch(totalCount(data.totalCount));
   }
}

export const pageChang = (page, count) => {
   return async (dispatch) => {
      dispatch(totalIsFetching(true))
      dispatch(pageChanger(page))

      let data = await usersAPI.setUser(page, count)

      dispatch(totalIsFetching(false))
      dispatch(setUsers(data.items));
   }
}


const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {

   dispatch(totalFollowingIsProgress(true, userId))

   let response = await apiMethod(userId)

   if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId))
   }
   dispatch(totalFollowingIsProgress(false, userId))
}


export const unfollow = (userId) => {
   return async (dispatch) => {
      await followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)

   }

}

export const follow = (userId) => {
   return async (dispatch) => {
      await followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followingSuccess)
   }
}

export default usersReducer;