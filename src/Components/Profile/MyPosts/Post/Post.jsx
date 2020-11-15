import React from 'react';
import s from './Post.module.css'


function Post(props) {
    return (
        <div className={s.item}>
            <img className={s.post_avatar} src={props.img_src} alt="" />
            <p className={s.post_text} >{props.message}</p>
            <div className={s.btn_like}>
                <input type="checkbox" />
                <p>Like</p>
               <span>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
