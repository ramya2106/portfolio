import React, { useRef } from 'react';
import './Contactstyle.css'
import Probg from '../pictures/proImg.avif'
import Contactdetails from './Contactdetails';


const Contactinfo = () => {
    
  return (
    <div>
       <div className='heading'>
            <img className="headintro-bg" src={Probg} alt="Introimg"/>
            
        <div className='contacts'>
            <h1>CONTACT ME</h1>
            <p>Get in touch</p>
        </div>
        <div className='space-media'></div>
        <Contactdetails/>
    </div>
    </div>
    
  )
}

export default Contactinfo