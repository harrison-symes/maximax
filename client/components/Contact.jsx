import React from 'react'
import {connect} from 'react-redux'

const Contact = ({dispatch}) => (
  <div className="Contact">
    <div className="line-separator"></div>
    <h1>Contact</h1>
    <div className="Contact-Details content">
      <p>For More information on training with me at Les Mills Dunedin, please use the following contact addresses:</p>
      <ul>
        <li>Mobile: 027 445 3965</li>
        <li>Email: maxsymes@hotmail.com</li>
        <li>Address: Les Mills,
          10/12 Dowling St,
          Dunedin, 9016</li>
      </ul>
      <p>"Google Map Here"</p>
    </div>

  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Contact)
