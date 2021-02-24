import React, {useState} from 'react';
import style from './Paginator.module.css';
import cn from "classnames";


let Paginator = ({onPageChanger, page, totalPages, count, portionSize = 20}) => {

   let pages = [];
   let pagesCount = Math.ceil(totalPages / count);

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   let portionCount = Math.ceil(pagesCount / portionSize);
   let [portionNumber, setPortionNumber] = useState(1);
   let LeftPortionBorder = (portionNumber - 1) * portionSize + 1;
   let RightPortionBorder = portionNumber * portionSize;


   return (
         <div className={style.pages}>
            {
               portionNumber > 1 && <button className={style.btn} onClick={() => {setPortionNumber(portionNumber - 1)}}>⇦</button>
            }
           {
             pages
                .filter(p => p >= LeftPortionBorder && p <= RightPortionBorder)
                .map((p) => <span key={p} onClick={() => {
                onPageChanger(p)
             }} className={cn(
                {
                   [style.selectedPage] : page === p
                }
                )}>{p}</span>)
            }
            {
                portionCount > portionNumber && <button className={style.btn} onClick={() => {setPortionNumber(portionNumber + 1)}}>⇨</button>
            }
         </div>
   )
}

export default Paginator;