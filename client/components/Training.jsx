import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scrollToContacts = () => {
  jump('.Contact', {offset: 0})
}

const Training = ({dispatch}) => (
  <div className="Training">
    <div className="line-separator"></div>
    <h1>Training</h1>
    <div className="content">
      <h3>In person training @ Les Mills, Dunedin:</h3>
      <h4>Sessions start at $30 for 30min.</h4>
    </div>
    <div className="content">
      <h2>Online Coaching:</h2>
      <h4>To get started with online coaching...</h4>
      <ul>
        <li>get in
          <a
            style={{color: 'blue', cursor: 'pointer'}}
            onClick={() => scrollToContacts()}>
            {" Contact "}
          </a>
          with me!</li>
        <li>To kick off, I’ll send through a comprehensive questionnaire, addressing everything from your training history, injury history, goals, and time commitment towards training.</li>
        <li>I’ll provide you with monthly programming that is specific to you. I’m not going to handout cookie-cutter programmes; I’m better than that. Each programme addressing warm-up, foam-rolling, mobility, strength,power,speed, muscles gain, and prehab/rehabilitation.</li>
      </ul>
      <p>The first month of programming is $80, which will cover your assessment and paperwork. For all other subsequent months, the cost will be</p>
      <h3>$60 per month</h3>
    </div>
    <div className="content">
      <p>For More information on training with me at Les Mills Dunedin, please refer to the
        <a
          style={{color: 'blue', cursor: 'pointer'}}
          onClick={() => scrollToContacts()}>
          {" Contact "}
        </a>
        section at the bottom of the page.
      </p>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Training)
