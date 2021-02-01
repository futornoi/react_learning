import React from 'react';
import style from './Paginator.module.css';


let Paginator = ({onPageChanger, page, totalPages, count}) => {

   let pages = [];
   let pagesCount = Math.ceil(totalPages / count);

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   return (
         <div className={style.pages}>
           {
             pages.map((p) => <span key={p} onClick={() => {
                onPageChanger(p)
             }} className={page === p ? style.selectedPage : null}>{p}</span>)
            }
         </div>
   )
}

export default Paginator;