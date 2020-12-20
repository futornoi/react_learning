import React from 'react';
import preloader from "../../../assets/images/preloader.gif";


let Preloader = () => {
   return (
      <div style={{textAlign: 'center', marginTop: '10px'}}>
         <img src={preloader} alt='идёт загрузка...'/>
      </div>
   )
}

export default Preloader;