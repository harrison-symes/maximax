import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const jumpDown = () => {
  jump('.Trainer', {offset: -10})
}

const Home = ({dispatch}) => (
  <div className="Home">
    <div className="line-separator"></div>
    <div className="Home-content" style={{cursor: 'pointer'}} onClick={() => jumpDown()}>
      <h1>Welcome</h1>
      <h2>ↆ</h2>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
