import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const jumpDown = () => {
  jump('.Trainer', {offset: -85})
}

const Home = ({dispatch}) => (
  <div className="Home hero is-full-height is-light">
    <div className="line-separator home-separator"></div>
    <div className="Home-content hero-body container" style={{cursor: 'pointer'}} onClick={() => jumpDown()}>
      <h1 className="title">Welcome</h1>
      <h2 className="subtitle">ↆ</h2>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
