import React from 'react'
import {connect} from 'react-redux'

const Trainers = ({dispatch}) => (
  <div className="Trainers">
    <h1>Trainer</h1>
    <h3>Max Symes</h3>
    <img src="http://placekitten.com/g/200/200"></img>
    <p>I received my Honour’s degree in Physical Education with a concentration in Exercise Prescription through the University of Otago. In addition to being a Les Mills Personal Trainer, I have worked as Strength & Conditioning Intern for the Pulse Energy Highlanders (2017) as well as a tutor at the University of Otago.</p>
    <p>My primary goal is to provide efficient client care. I am conscious and extremely sensitive to the various demographics presented in the gym. I routinely search the evidence for optimal exercise methods and interventions for each client or problem. Although prepared in a variety of bodies of knowledge, I specialise in applied biomechanics as it relates to programme design and corrective exercise. I can evaluate your movement and identify flaws in technique to not only mitigate the risk of injury but also ensure you’re moving efficiently</p>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Trainers)
