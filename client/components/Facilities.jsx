import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scrollToContacts = () => {
  jump('.Contact', {offset: -20})
}

const Facilities = ({dispatch}) => (
  <div className="Facilities">
    <div className="line-separator"></div>
    <h1>Faciltiies</h1>
    <img src="http://placekitten.com/g/200/200"></img>
    <p>Here is some sample text about the facilities, we have some very fine facilities here, and here are some facts about them: </p>
    <ul>
      <li>Our</li>
      <li>Equipment</li>
      <li>Is</li>
      <li>Sweaty</li>
    </ul>
    <p>Why are our facilities the best? Because we have a location that is undisclosed as of yet, but I'm sure that the location is great. We want to do a good job and be great and have a good reputation and all that stuff</p>
    <p>If you wish to check out our facilities, refer to the
      <a
        style={{color: 'blue', cursor: 'pointer'}}
        onClick={() => scrollToContacts()}>
        {" Contact "}
      </a>
    section below</p>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Facilities)
