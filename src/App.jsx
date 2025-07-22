import React from 'react'
import Nav from './Static/Nav'
import { BrowserRouter, Router,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
      <Router>
        <Route/>
      </Router>
      </BrowserRouter>
      
    </div>
  )
}

export default App