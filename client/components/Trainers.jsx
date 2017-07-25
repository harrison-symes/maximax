import React from 'react'
import {connect} from 'react-redux'

const Trainers = ({dispatch}) => (
  <div className="Trainer container has-text-centered">
    <h1 className="title is-fluid">Trainer</h1>
    <h3 className="subtitle">Max Symes</h3>
    <div className="container columns level">
      <div className="column is-two-thirds level-left">
        <img src="http://placekitten.com/g/200/200"></img>
      </div>
      <div className="column content level-right">
          <p>I received my Honour’s degree in Physical Education with a concentration in Exercise Prescription through the University of Otago. In addition to being a Les Mills Personal Trainer, I have worked as Strength & Conditioning Intern for the Pulse Energy Highlanders (2017) as well as a tutor at the University of Otago.</p>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Trainers)
