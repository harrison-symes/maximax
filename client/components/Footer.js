import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e) => {
  jump(`.Home`, {offset: -20})
}

const Footer = ({dispatch}) => (
  <div className="Footer" onClick={(e) => scroll(e)}>
    <a href="https://www.instagram.com/symesmax"><img src="./images/instagram.png" /></a>
    <img src="http://placekitten.com/g/200/200"/>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Footer)
