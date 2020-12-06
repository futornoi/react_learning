import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



   let mapStateToProps = (state) => {
      return {
         postData: state.profilePage.postData,
         newPostText: state.profilePage.newPostText,
      }
   };

   let mapDispatchToProps = (dispatch) => {
      return {
         onChangePost: (text) => {dispatch(updateNewPostTextActionCreator(text))},
         addPost: () => {dispatch(addPostActionCreator())},
      }
   };

   const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
