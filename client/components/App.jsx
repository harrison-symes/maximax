import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import Trainer from './Trainers'
import Training from './Training'
import About from './About'

const App = () => (
  <div className='app-container'>
    <Header />
    <div className="app-body">
      <Home />
      <div className="line-separator"></div>
      <Trainer />
      <div className="line-separator"></div>
      <About />
      <div className="line-separator"></div>
      <Training />
      <div className="line-separator"></div>
      <Contact />
      <div className="line-separator"></div>
    </div>
    <div className="line-separator-bottom"></div>
    <Footer />
  </div>
)

export default App
