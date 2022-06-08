import React from 'react'
import './projectimgstyle.css'

const Projectlist = ({list}) => {
  return (
    <div className='work-container'>
        <div className='project-container'>
            <div className='project-card'>
                <img src={list.img} alt="Project Image"/>
            </div>
            <h2 className='project-title'>
                {list.title}
            </h2>
            <div className='pro-btns'>
            <a href = {list.url} className='btn'>View</a>
            <a href = {list.source} className='btn btn-light'>Code</a>
            </div>
        </div>
    </div>
  )
}

export default Projectlist