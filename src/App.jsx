import React from 'react'
import Nav from './Static/Nav'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
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
      <Contact/>
    </div>
  )
}

export default App