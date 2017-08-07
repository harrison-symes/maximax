import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e) => {
  jump(`.Home`, {offset: -20})
}

const Footer = ({dispatch}) => (

  <footer className="footer">
    <div className="container has-text-centered">
      <a href="https://www.instagram.com/symesmax"><img style={{height: '20vh'}}src="./images/instagram.png" /></a>
    </div>

  <div className="container">
    <div className="line-separator"></div>
    <div className="content has-text-centered">
      <p>
         Built by <a href="https://github.com/harrison-symes">Harrison Symes</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
      </p>
      <p>
        <a className="icon" href="https://github.com/harrison-symes/maximax">
          <i className="fa fa-github"></i>
        </a>

      </p>
    </div>
  </div>
</footer>


)

const mapStateToProps = (state) => {

}

export default connect()(Footer)
