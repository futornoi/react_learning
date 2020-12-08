const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
   users: [
      {
         id: 1,
         avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
         name: 'Maks',
         location: {
            country: 'Ukraine',
            city: 'Odessa',
         },
         status: 'i\'m future boss',
         following: true,
      },
      {
         id: 2,
         avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
         name: 'Maks2',
         location: {
            country: 'Ukraine2',
            city: 'Odessa2',
         },
         status: 'i\'m future boss2',
         following: false,
      },
      {
         id: 3,
         avatar: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg',
         name: 'Maks3',
         location: {
            country: 'Ukraine3',
            city: 'Odessa3',
         },
         status: 'i\'m future boss3',
         following: true,
      },
   ]
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
            })
         }
      case 'UNFOLLOW':
         return {
            ...state,
            users: state.users.map((u) => {
               if(u.id === action.userId) {
                  return {
                     ...u,
                     following: false,
                  }
               }
            })
         }
      case 'SET-FOLLOW':
         return {
            ...state, users: [...state.users, ...action.users]
         }
      default:
         return state;
   }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;