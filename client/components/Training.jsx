import React from 'react'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scrollToContacts = () => {
  jump('.Contact', {offset: 0})
}

const Training = ({dispatch}) => (
  <div className="Training container has-text-centered tile is-anscestor">

    <div className="tile is-parent is-vertical is-6 content">
      <div className="tile is-child box">
        <h1 className="title">In person training @ Les Mills, Dunedin:</h1>
        <h3 className="subtitle">Sessions start at <strong>$30</strong> for 30min.</h3>
      </div>
      <div className="tile is-child">
        <img src="/images/inPerson.jpg"></img>
      </div>
    </div>

    <div className="tile is-parent is-vertical is-6">
      <div className="tile is-child ">
        <div className="tile is-child content box">
          <h1 className="title">Online Coaching:</h1>
          <h3 className="subtitle">To get started....</h3>
        </div>
        <div className="tile is-child content box">
          <ul className="content has-text-centered">
            <li>get in
              <a
                style={{color: 'blue', cursor: 'pointer'}}
                onClick={() => scrollToContacts()}>
                {" Contact "}
              </a>
              with me!</li>
            <li >To kick off, I’ll send through a comprehensive questionnaire, addressing everything from your training history, injury history, goals, and time commitment towards training.</li>
            <li>I’ll provide you with monthly programming that is specific to you. I’m not going to handout cookie-cutter programmes; I’m better than that. Each programme addressing warm-up, foam-rolling, mobility, strength,power,speed, muscles gain, and prehab/rehabilitation.</li>
          </ul>
        </div>
        <div className="tile is-child content box">
          <h3 className="content">The first month of programming is <strong>$80</strong>, which will cover your assessment and paperwork.</h3>
          <h3>For all other subsequent months, the cost will be <strong>$60</strong> per month</h3>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Training)
