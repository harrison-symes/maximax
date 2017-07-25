import React from 'react'
import {connect} from 'react-redux'

import Referrals from './Referrals'


const About = ({dispatch}) => (
  <div className="About container has-text-centered columns" >
    <div className="column is-three-quarters content">
      <h1 className="title is-fluid ">About</h1>
      <p className="media">My primary goal is to provide efficient client care. I am conscious and extremely sensitive to the various demographics presented in the gym. I routinely search the evidence for optimal exercise methods and interventions for each client or problem. Although prepared in a variety of bodies of knowledge, I specialise in applied biomechanics as it relates to programme design and corrective exercise. I can evaluate your movement and identify flaws in technique to not only mitigate the risk of injury but also ensure you’re moving efficiently.</p>
    </div>
    <div className="column is-one-third">
      <img src="http://placekitten.com/g/400/400"></img>
    </div>
    <div className="title column media is-one-third">
      <h3 className="title">Referrals: </h3>
      <Referrals />
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(About)
