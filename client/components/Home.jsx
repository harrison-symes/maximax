import React from 'react'
import {connect} from 'react-redux'

const Home = ({dispatch}) => (
  <div className="Home">
    <div className="line-separator"></div>
    <h1>Welcome</h1>
    <img src="http://placekitten.com/g/200/200" />
    <p>Welcome to my website. There is not going to be a whole lot of text here because most of this section should be occupied by a nice splash immage/banner, this is just an intro to the site/org</p>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
