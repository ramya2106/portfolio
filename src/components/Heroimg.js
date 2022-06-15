import React from 'react'
import Introbg from '../pictures/bg.jpg'
import './Heroimgstyle.css'
import { Link } from 'react-router-dom'

const Heroimg = () => {
  return (
    <div className='header'>
        <div className='intro'>
            <img className="Intro-bg" src={Introbg} alt="Introimg"/>
        </div>
        <div className='content'>
            <p>Hi, I'm a PHP and Moodle developer</p>
            <h1>Front-end web Developer</h1>
            <div className='button'>
                <Link to = '/projects' className='btn'>
                    Projects
                </Link>
                <Link to = '/contact' className='btn btn-light'>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg