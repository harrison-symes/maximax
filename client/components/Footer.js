import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e) => {
  jump(`.Home`, {offset: -20})
}

const Footer = ({dispatch}) => (
  <footer
    className="footer content has-text-centered is-dark level"
    onClick={(e) => scroll(e)}
    style={{height: '10vh'}}
  >
    <span className="icons">
      <a className="level-left level-item "href="https://www.instagram.com/symesmax"><img src="./images/instagram.png" style={{height: '10vh'}}/></a>
      <img className="level-right level-item " src="http://placekitten.com/g/200/200" style={{height: '10vh'}} />
    </span>
  </footer>
)

const mapStateToProps = (state) => {

}

export default connect()(Footer)
