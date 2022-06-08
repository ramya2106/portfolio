import React from 'react'
import Skilllist from './Skilllist'
import Skillapi from '../Imageapi/Skillapi'
import './Skillimagestyle.css'
import Aboutpage from './Aboutpage'

const Skills = () => {
  return (
      <div className='skill-main'>
           <div className='skill-container'>
              <p className='skill-title'>Skills</p>
              <p className='skill-desc'> These are the technologies I've worked with</p>
          </div>
        <div className='skillset'>
            {
                Skillapi.map((skillset,index)=>{
                    return <Skilllist list={skillset} key={index}/>
                })
            }
        </div>
        <Aboutpage/>
      </div>
   
  )
}

export default Skills