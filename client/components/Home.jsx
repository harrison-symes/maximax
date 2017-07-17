import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const jumpDown = () => {
  jump('.About', {offset: 0})
}

const Home = ({dispatch}) => (
  <div className="Home">
    <div className="line-separator"></div>
    {/* <img src="http://placekitten.com/g/200/200" /> */}
    <div className="content">
      <h1>Welcome</h1>
      <p style={{cursor: 'pointer'}} onClick={() => jumpDown()}>ↆ</p>
      
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
