import React from 'react'
import {connect} from 'react-redux'

import Referrals from './Referrals'


const About = ({dispatch}) => (
  <div className="About container has-text-centered tile is-anscestor" >
    <div className="tile is-parent is-vertical is-6 content">
      <h1 className="section-title is-fluid ">About</h1>
      <p className="media tile is-child">My primary goal is to provide efficient client care. I am conscious and extremely sensitive to the various demographics presented in the gym. I routinely search the evidence for optimal exercise methods and interventions for each client or problem. Although prepared in a variety of bodies of knowledge, I specialise in applied biomechanics as it relates to programme design and corrective exercise. I can evaluate your movement and identify flaws in technique to not only mitigate the risk of injury but also ensure you’re moving efficiently.</p>
      <div className="title tile is-child box">
        <h3 className="title">Referrals: </h3>
        <Referrals />
      </div>
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

const mapStateToProps = (state) => {

}

export default connect()(About)
