import React from 'react'
import Projectlist from './Projectlist'
import Projectapi from '../Imageapi/Projectapi'
import './projectimgstyle.css'
const Project = () => {
  return (
    <div>
      <div className='project-intro'>
              <p className='intro-title'>Projects</p>
              <p className='intro-desc'> These are the applications created by me!</p>
          </div>
       <div className='prolist'>
        {
            Projectapi.map((prolist,index)=>{
                return <Projectlist list={prolist} key={index}/>
            })
        }     
    </div>
    </div>
   
  )
}

export default Project