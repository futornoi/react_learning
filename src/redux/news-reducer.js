import {newsAPI} from "../api/api";

const SEARCH_THEME = 'newsReducer/SEARCH-THEME';

let initialState = {
   newsInfo: [],
};


const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'newsReducer/SEARCH-THEME' :
      return {
         ...state,
         newsInfo: action.payload,
      }
      default:
         return state;
   }
}

export const setNews = (news) => ({type: SEARCH_THEME, payload: news});


export const searching = (theme) => {
   return async (dispatch) => {

      let data = await newsAPI.setNews(theme);
      let allNews = [];
      if(data.status === 'ok') {
         for (let i = 0; i< data.articles.length; i++) {
            allNews.push(data.articles[i]);
         }
         dispatch(setNews(allNews))
      }
   }
}


export default newsReducer