import React from 'react'
import {connect} from 'react-redux'

const Contact = ({dispatch}) => (
  <div className="Contact">
    <div className="line-separator"></div>
    <h1>Contact</h1>
    <div className="Contact-Details content">
      <p>If you wish to get in contact, call/email me with the information below, or come to check out our facilities and talk to me, face to face. We shall hear from you soon!</p>
      <p>Mobile: 027-934-4793</p>
      <p>Email: Symeshjb@gmail.com</p>
      <p>"Google Map Here"</p>
      <p>Address: 6 Baring Street, Oriental Bay Wellington (6011)</p>
    </div>
  </div>
)

const mapStateToProps = (state) => {

}

export default connect()(Contact)
