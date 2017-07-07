import React from 'react'
import {connect} from 'react-redux'

const Training = ({dispatch}) => (
  <div className="Training">
    <div className="line-separator"></div>
    <h1>Training</h1>
    <div className="content">
      <p>Here at no name, we like to do a lot of training, personal training. Here are some steps and things that we focus on when it comes to our training process</p>
      <ul>
        <li>Lifting</li>
        <li>Leg Day</li>
        <li>Arm Day</li>
      </ul>
      <p>Conclusive information about the training just described and why it is the best training regime imaginable, hahahahahah</p>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Training)
