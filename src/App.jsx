import React from 'react'
import Nav from './Static/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Skills from './pages/Skills'
import Project from './pages/Project'
const App = () => {
  return (
    <div>
      <Nav/>
      <section id='home'>
        <Home/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section>
        <Project/>
      </section>
      <Contact/>
    </div>
  )
}

export default App