import React from 'react'
import Contactdetails from '../components/Contactdetails'
import Heroimg from '../components/Heroimg'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Skills from '../components/Skills'
import Footer from './Footer'

const Home = () => {
  return (
    <div name='home'>
      <Navbar/>
      <Heroimg/>
      <Skills/>
      <Project/>
      <div className='project-intro'>
              <p className='intro-title'>Contact</p>
              <p className='intro-desc'> Get In Touch!</p>
              <Contactdetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home