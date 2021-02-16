import React, {useState} from 'react';
import s from './AboutMe.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/images/icon.png'
import ProfileStatus from "./ProfileStatus";
import Contacts from "./Contacts";
import ContactsReduxForm from "./ContactsForm";

function AboutMe({usersProfile, putUserStatus, isOwner, userStatus, putUserProfile}) {

   const [editMode, setEditMode] = useState(false)

   if (!usersProfile) {
      return <Preloader/>
   }

   let fullName = usersProfile.fullName;
   let photos = usersProfile.photos.large;

   const onSubmit = (formData) => {
      putUserProfile(formData).then(() => {
         setEditMode(false)
      })
   }


   return (
      <div>
         <div className={s.header_img}/>
         <div className={s.about_me}>
            <div className={s.avatar}>
               <img src={photos != null ? photos : avatar} alt="avatar"/>
            </div>
            <div className={s.description}>
               <div className={s.title}>{fullName}</div>
               <div>
                  <ProfileStatus status={userStatus} isOwner={isOwner} putUserStatus={putUserStatus}/>
               </div>
              <div className={s.editContact}>
                 {editMode ?
                    <ContactsReduxForm initialValues={usersProfile} onSubmit={onSubmit} goOutToEditMode={() => {setEditMode(false)}} usersProfile={usersProfile}/> :
                    <Contacts isOwner={isOwner} goToEditMode={() => {setEditMode(true)}} usersProfile={usersProfile}/>}
              </div>
            </div>
         </div>
      </div>
   );
}

export default AboutMe;
