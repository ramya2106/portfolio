import React from 'react'
import Navbar from '../components/Navbar'
import Projectimg from '../components/Projectimg'
import Skills from '../components/Skills'
import Footer from './Footer'
const About = () => {
  return (
    <div name = 'about'>
     <Navbar/>
     <Projectimg Heading = "ABOUT ME" Text = "I'm a fullstack developer"/>
     <Skills/>
     <Footer/>
    </div>
  )
}

export default About