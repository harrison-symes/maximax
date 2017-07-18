import React from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

const Header = ({dispatch}) => (
  <div className="Header">
    <Nav />
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Header)
