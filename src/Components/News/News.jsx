import React from 'react';
import s from "../Messages/Messages.module.css";
import SearchFormRedux from "./SearchForm";
import Preloader from "../common/Preloader/Preloader";
import newsStyle from "./News.module.css";

const News = (props) => {
   const onSubmit = (formData) => {
      props.searchTheme(formData.theme)
   }

   const newsElement = props.newsInfo.map(n => <div className={newsStyle.newsItem} key={n.id}>
      <h4>{n.title || null}</h4>
      <img className={newsStyle.image} src={n.urlToImage || null} alt=""/>
      <div>{n.content || null}</div>
      <div className={newsStyle.newsFooter}>
         <div className={newsStyle.autor}>{n.author || null}</div>
         <div>{n.publishedAt || null}</div>
      </div>

   </div>)

   return (
      <div>
         <h2 className={s.title}>News</h2>
         <SearchFormRedux onSubmit={onSubmit}/>
         {!props.newsInfo ? <Preloader/> : null}
         <div className={newsStyle.container}>{newsElement}</div>
      </div>
   );
};


export default News;