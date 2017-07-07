import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const jumpDown = () => {
  jump('.About', {offset: -20})
}

const Home = ({dispatch}) => (
  <div className="Home">
    <div className="line-separator"></div>
    <h1>Welcome</h1>
    <img src="http://placekitten.com/g/200/200" />
    <div className="content">
      <p>Welcome to my website. There is not going to be a whole lot of text here because most of this section should be occupied by a nice splash immage/banner, this is just an intro to the site/org</p>
    </div>
    <h1 onClick={() => jumpDown()}>▼</h1>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Home)
