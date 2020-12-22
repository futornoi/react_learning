import React from 'react';
import s from './AboutMe.module.css'
import Preloader from "../../common/Preloader/Preloader";
import avatar from '../../../assets/images/icon.png'

function AboutMe(props) {

    if(!props.usersProfile) {
        return <Preloader />
    }

    let fullName =  props.usersProfile.fullName;
    let aboutMe = props.usersProfile.aboutMe;

    let photos = props.usersProfile.photos.large;

    let facebook = props.usersProfile.contacts.facebook;
    let website = props.usersProfile.contacts.website;
    let vk = props.usersProfile.contacts.vk;
    let twitter = props.usersProfile.contacts.twitter;
    let instagram = props.usersProfile.contacts.instagram;
    let youtube = props.usersProfile.contacts.youtube;
    let github = props.usersProfile.contacts.github;
    let mainLink = props.usersProfile.contacts.mainLink;

    let lookingForAJob = props.usersProfile.lookingForAJob;
    let lookingForAJobDescription = props.usersProfile.lookingForAJobDescription;

    return (
        <div>
            <div className={s.header_img}></div>
            <div className={s.about_me}>
                <div className={s.avatar}>
                    <img src={photos != null ? photos : avatar} alt="avatar" />
                </div>
                <div className={s.description}>
                    <div className={s.title}>{fullName}</div>
                    <div>{aboutMe}</div>
                    <ul className={s.contacts}>
                        <h3>Contacts:</h3>
                        {facebook != null ? <li>facebook : {facebook}</li> : '' }
                        {website != null ? <li>website : {website}</li> : '' }
                        {vk != null ? <li>vk : {vk}</li> : '' }
                        {twitter != null ? <li>twitter : {twitter}</li> : '' }
                        {instagram != null ? <li>instagram : {instagram}</li> : '' }
                        {youtube != null ? <li>youtube : {youtube}</li> : '' }
                        {github != null ? <li>github : {github}</li> : '' }
                        {mainLink != null ? <li>mainLink : {mainLink}</li> : '' }
                    </ul>
                    <ul className={s.jobSection}>
                        <h3>Looking for a job:</h3>
                        {lookingForAJob === true ? <li>yes</li> : <li>no</li>}
                        {lookingForAJobDescription != null ? <li>{lookingForAJobDescription}</li> : ''}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
