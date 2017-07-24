import React from 'react'
import {connect} from 'react-redux'
import Nav from './Nav'

const Header = ({dispatch}) => (
  <header className="Header nav hero leveis-bold is-dark">
    <Nav />
  </header>
)

const mapStateToProps = (state) => {

}

export default connect()(Header)
