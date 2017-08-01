import React from 'react'
import {connect} from 'react-redux'

const Trainers = ({dispatch}) => (
  <div className="Trainer container has-text-centered">
    <div className="container columns level">
      <div className="column level-left">
        <img className="profile-image" src="/images/profile2.jpg"></img>
      </div>
      <div className="column  level-right is-two-thirds">
        <h3 className="title is-fluid ">Max Symes</h3>
          <p className="content">I received my Honour’s degree in Physical Education with a concentration in Exercise Prescription through the University of Otago. In addition to being a Les Mills Personal Trainer, I have worked as Strength & Conditioning Intern for the Pulse Energy Highlanders (2017) as well as a tutor at the University of Otago.</p>
      </div>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Trainers)
