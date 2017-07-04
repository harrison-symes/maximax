import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import Trainers from './Trainers'
import Training from './Training'
import About from './About'
import Facilities from './Facilities'

const App = () => (
  <Router>
    <div className='app-container'>
      <Header />
      <div className="app-body">
        <Home />
        <div className="line-separator"></div>
        <About />
        <div className="line-separator"></div>
        <Trainers />
        <div className="line-separator"></div>
        <Training />
        <div className="line-separator"></div>
        <Facilities />
        <div className="line-separator"></div>
        <Contact />
      </div>
      <Footer />
    </div>
  </Router>
)

export default App
