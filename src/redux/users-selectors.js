import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
   return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
   return users.filter(u => true);
})


export const getCount = (state) => {
   return state.usersPage.count;
}

export const getPage = (state) => {
   return state.usersPage.page;
}

export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
}

export const getFollowingIsProgress = (state) => {
   return state.usersPage.followingIsProgress;
}

export const getTotalPages = (state) => {
   return state.usersPage.totalPages;
}
