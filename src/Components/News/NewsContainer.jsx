import React from 'react';
import News from "./News";
import {connect} from "react-redux";
import {compose} from "redux";
import { withRouter } from "react-router-dom"
import {searching} from "../../redux/news-reducer";


class NewsContainer extends React.Component {

   searchTheme = (theme) => {
      this.props.searching(theme)
   }


   render() {
      return <News {...this.props} searchTheme={this.searchTheme} newsInfo={this.props.newsInfo}/>
   }
}

let mapStateToProps = (state) => {
   return {
      newsInfo: state.news.newsInfo,
   };
}

export default compose (
   connect(mapStateToProps, {searching}),
   withRouter,
)(NewsContainer)
