import React from 'react';
import s from "./AboutMe.module.css";

const Contacts = ({usersProfile, goToEditMode, isOwner}) => {

   let {lookingForAJob, lookingForAJobDescription} = usersProfile;

   return ( <div className={s.editContact}>
         <div>
            <ul className={s.contacts}>
               <h3>Contacts:</h3>
               {
                  Object.keys(usersProfile.contacts).map(key => usersProfile.contacts[key] !== null && usersProfile.contacts[key] !== '' ? <li key={key}>{key} : {usersProfile.contacts[key]}</li> : '')
               }
            </ul>
            <ul className={s.jobSection}>
               <h3>Looking for a job: {lookingForAJob === true ? <span>✓</span> : <span>✗</span>}</h3>
               {lookingForAJobDescription != null ? <li>{lookingForAJobDescription}</li> : ''}
            </ul>
         </div>
         <div>
            {isOwner && <button onClick={goToEditMode} className={s.btn}>edit</button>}
         </div>
      </div>
   )
}

export default Contacts