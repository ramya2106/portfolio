import React from 'react'
import '../components/style.css'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content '>
            <div className='footer-col1'>
                <h1 className='col1-title'>Ramya Sankar</h1>
                <div className='col1-desc'>
                <p>Hi, I am a PHP Moodle as well as React JS developer from Chennai. 
                I love to make an applications in react js with good designs.</p> 
                </div>
            </div>
            <div className='footer-col2'>
                <div className='footer-links'>
                    <h2>Important Links</h2>
                    <ul>
                        <li><a href='/portfolio'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/projects'>Projects</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-col3'>
            <div className='footer-soclinks'>
                    <h2>Social Media Links</h2>
                    <ul>
                        <li className='whats'><BsWhatsapp/>  +919345769246</li>
                        <li><a href='www.linkedin.com/in/ramya-sankar-b237481b4'><BsLinkedin/>  Linked In</a></li>
                        <li><a href='https://github.com/ramya2106'><BsGithub/>  Git HUb</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
        <p>© 2022 My portfolio | Designed By Ramya S</p>
        </div>
    </div>
  )
}


export default Footer