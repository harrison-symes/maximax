import React from 'react'
import {connect} from 'react-redux'

const Home = ({dispatch}) => (
  <div className="Home">
    <h1>Home</h1>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
