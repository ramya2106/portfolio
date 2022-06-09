import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Home from './router/Home'
import About from './router/About'
import Projects from './router/Projects'
import Contact from './router/Contact'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/projects' element = {<Projects/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App