import React from 'react'
import Nav from './Static/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Skills from './pages/Skills'
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
      <section>
        <Skills/>
      </section>
      <Contact/>
    </div>
  )
}

export default App