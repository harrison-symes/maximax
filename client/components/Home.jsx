import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const jumpDown = () => {
  jump('.Trainer', {offset: -85})
}

const Home = ({dispatch}) => (
  <section
    className="Home is-fullheight  is-light is-bold"
    style={{cursor: 'pointer'}}
    onClick={() => jumpDown()}
  >
    <div className="hero-head"></div>
    <div className="hero-body">
      <div className="container">
        <h1 className="welcome-title">Welcome</h1>
        <h2 className="subtitle">ↆ</h2>
      </div>
    </div>
    <div className="hero-foot"></div>
  </section>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
