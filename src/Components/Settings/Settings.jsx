import React from 'react';
import s from './../Messages/Messages.module.css';
import style from './Settings.module.css'

const Settings = (props) => {


   const savePhoto = (e) => {
      if (e.target.files.length) {
         props.savePhoto(e.target.files[0])
      }
   }
   debugger
   return (
      <div>
         <header><h2 className={s.title}>Settings</h2></header>
         <div className={style.mainSection}>
            <div className={style.settingItem}>
               <h5>Change photo:</h5>
               <input onChange={savePhoto} className={style.uploadFile} type="file"/>
            </div>
         </div>
      </div>
   )
}

export default Settings;