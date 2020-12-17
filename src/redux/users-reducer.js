const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const PAGE_CHANGER = 'PAGE-CHANGER';
const TOTAL_COUNT = 'TOTAL-COUNT';


let initialState = {
   users: [],
   count: 10,
   page: 3,
   totalPages: 90,
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'FOLLOW':
         return {
            ...state,
            users: state.users.map((u) => {
               if(u.id === action.userId) {
                  return {
                     ...u,
                     following: true,
                  }
               }
               return u;
            })
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map(u => {
               if(u.id === action.userId) {
                  return {
                     ...u,
                     following: false,
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
         return  {
            ...state,
            totalPages: action.totalCount
         }
      default:
         return state;
   }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const pageChangerAC = (page) => ({type: PAGE_CHANGER, page})
export const totalCountAC = (totalCount) => ({type: TOTAL_COUNT, totalCount})

export default usersReducer;