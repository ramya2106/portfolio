import React from 'react'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Projectimg from '../components/Projectimg'
import Footer from './Footer'

const Projects = () => {
  return (
    <div name = 'projects'>
      <Navbar/>
      <Projectimg Heading = "PROJECTS" Text = "Some of my recent works"/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default Projects