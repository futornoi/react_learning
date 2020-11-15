import React from 'react';
import s from './AboutMe.module.css'


function AboutMe(props) {
    return (
        <div>
            <div className={s.header_img}></div>
            <div className={s.about_me}>
                <div className={s.avatar}>
                    <img src="https://static.tildacdn.com/tild3763-6439-4133-a533-666531616663/instagram.svg" alt="" />
                </div>
                <div className={s.desciption}>
                    <div className={s.title}>Futornoi Maks</div>
                    <ul className={s.contacts}>
                        <li>Date of Birth: 1 april</li>
                        <li>City: Odessa</li>
                        <li>Education: ONAT</li>
                        <li>Web Site: --</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
