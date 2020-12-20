const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const PAGE_CHANGER = 'PAGE-CHANGER';
const TOTAL_COUNT = 'TOTAL-COUNT';
const TOTAL_FETCHING = 'TOTAL-FETCHING';


let initialState = {
   users: [],
   count: 10,
   page: 1,
   totalPages: 90,
   isFetching: false,
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
      case 'TOTAL-FETCHING':
         return {
            ...state,
            isFetching: action.isFetching,
         }
      default:
         return state;
   }
}


export const followed = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const pageChanger = (page) => ({type: PAGE_CHANGER, page})
export const totalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount})
export const totalIsFetching = (isFetching) => ({type: TOTAL_FETCHING, isFetching})

export default usersReducer;