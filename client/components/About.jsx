import React from 'react'
import {connect} from 'react-redux'

import Referrals from './Referrals'


const About = ({dispatch}) => (
  <div className="About">
    <div className="line-separator"></div>
    <h1>About</h1>
    <div className="content">
      <p>Here is some text describing what we here at "unknown" are trying to achieve</p>
      <p>We want to offer the best service and we can achieve it through a bunch of things that maybe are described here. We have had this success rating, and here are some references submitted by previous clients</p>
    </div>
    <Referrals />
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(About)
