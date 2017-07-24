import React from 'react'
import {connect} from 'react-redux'

import Referrals from './Referrals'


const About = ({dispatch}) => (
  <div className="About">
    <div className="line-separator"></div>
    <h1>About</h1>
      <p>My primary goal is to provide efficient client care. I am conscious and extremely sensitive to the various demographics presented in the gym. I routinely search the evidence for optimal exercise methods and interventions for each client or problem. Although prepared in a variety of bodies of knowledge, I specialise in applied biomechanics as it relates to programme design and corrective exercise. I can evaluate your movement and identify flaws in technique to not only mitigate the risk of injury but also ensure you’re moving efficiently.</p>
      <Referrals />
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(About)
