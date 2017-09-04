import React from 'react'
import Referrals from './Referrals'

const About = () => (
  <div className="About container has-text-centered tile is-anscestor" >
    <div className="tile is-parent is-vertical is-6 content">
      <h1 className="section-title is-fluid ">About</h1>
      <p className="media tile is-child">My primary goal is to provide efficient client care. I am conscious and extremely sensitive to the various demographics presented in the gym.
      <br/>
      I routinely search the evidence for optimal exercise methods and interventions for each client or problem.
      <br/>
      Although prepared in a variety of bodies of knowledge, I specialise in applied biomechanics as it relates to programme design and corrective exercise.
      <br/>
      I can evaluate your movement and identify flaws in technique to not only mitigate the risk of injury but also ensure you’re moving efficiently.</p>
    </div>
    <div className="tile is-parent is-vertical is-6">
      <div className="tile is-child">
        <img src="/images/fun.jpg"></img>
      </div>
      <div className="tile is-child">
        <img src="/images/fun2.jpg"></img>
      </div>
    </div>
  </div>
)

export default About
