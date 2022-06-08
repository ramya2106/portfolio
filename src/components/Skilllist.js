import React from 'react'
import './Skillimagestyle.css'

const Skilllist = ({list}) => {
  return (
    <div className='skil-container'>
        <div className='skillset-container'>
            <div className='skill-card'>
                <img className='skill-image' src={list.img} alt="Skills Image"/>
            </div>
            <p className='Skill-title'>
                {list.title}
            </p>
        </div>
    </div>
  )
}

export default Skilllist