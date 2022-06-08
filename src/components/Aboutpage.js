import React from 'react'
import './Skillimagestyle.css'
import Resume from '../pictures/Ramya_Resume.pdf'

const Aboutpage = () => {
  return (
    <div className='exprience-container'>
    <p className='exprience-title'>Work Exprience</p>
<div className='exprience-desc'>
  <div className='exprience-summ'>
    <p>Hi. I'm Ramya, nice to meet you. Please take a look around.</p>
  </div>
  <div className='exp-resume'>
    <p>I'm an enthusiastic, responsible and hardworking IT person. Being worked 
for projects helped me to adopt to the changes quickly and made me a 
mature team worker. I am able to work well under pressure and adhere to 
strict deadlines.</p> 
    <div className='resume'>
    <a href={Resume} download="Ramya's Resume" target='_blank'>
    <button className='btn'> Resume </button>
    </a>
    </div> 
  </div>
</div>
</div>
  )
}

export default Aboutpage