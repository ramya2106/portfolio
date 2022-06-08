import React from 'react'
import Probg from '../pictures/proImg.avif'
import './projectimgstyle.css'
import { Link } from 'react-router-dom'

const Projectimg = (props) => {
  const mystyle = {
    height: "85vh",
   };
  return (
    <div>
       <div className='heading'>
            <img className="headintro-bg" src={Probg} alt="Introimg" style={mystyle}/>
        <div className='procontent'>
            <h1>{props.Heading}</h1>
            <p>{props.Text}</p>
        </div>
    </div>
    </div>
  )
}

export default Projectimg