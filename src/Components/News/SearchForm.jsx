import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Element} from "../common/FormsControls/FormsControls";
import style from "../Login/Login.module.css";
import s from "../Profile/AboutMe/AboutMe.module.css";
import newsStyle from "./News.module.css";
import {required} from "../../utils/validators/validators";

const Input = Element('input');

const SearchForm = (props) => {
   return <form className={newsStyle.form} onSubmit={props.handleSubmit}>
      <div>
         {createField(style.formInput, null, "search news", Input, 'theme', [required])}
      </div>
      <div>
         <button className={s.btn}>Search</button>
      </div>
   </form>
}

let SearchFormRedux = reduxForm({form: 'news-form'})(SearchForm);

export default SearchFormRedux;