import React from 'react';
import s from "./AboutMe.module.css";
import {createField, Element} from "../../common/FormsControls/FormsControls";
import style from "../../Login/Login.module.css";
import {reduxForm} from "redux-form";


const Input = Element('input');
const Textarea = Element('textarea');

const ContactsForm = ({handleSubmit, usersProfile, error}) => {
   return (
         <form onSubmit={handleSubmit} className={s.editContact}>
            <div>
               <div>
                  {createField(style.formInput, null, 'FullName', Textarea, `FullName`, [])}
               </div>
               <div className={s.contacts}>
                  <h3>Contacts:</h3>
                  {error && <div className={style.error}>{error}</div>}
                  {
                     Object.keys(usersProfile.contacts).map(key => <li key={key}>{key} : {createField(style.formInput, null, key, Input, `contacts.${key}`, [])}</li>)
                  }
               </div>
               <div className={s.jobSection}>
                  <div>About me:
                     {createField(style.formInput, null, 'About me', Textarea, `AboutMe`, [])}
                  </div>
                  <div>Looking for a job:
                     {createField(style.formInput, "checkbox", null, Input, `lookingForAJob`, [])}
                  </div>
                  <div>Looking for a job description:
                     {createField(style.formInput, null, 'Looking for a job description', Textarea, `lookingForAJobDescription`, [])}
                  </div>
               </div>
            </div>
            <div>
               <button className={s.btn}>save</button>
            </div>
         </form>
   )
};


const ContactsReduxForm = reduxForm({form: 'contacts-form'})(ContactsForm)

export default ContactsReduxForm;