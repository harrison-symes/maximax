import React from 'react'
import {connect} from 'react-redux'
import Map from './Map'

const Contact = ({dispatch}) => (
  <div className="Contact container tile is-anscestor has-text-centered">
    <div className="tile is-parent is-vertical is-6 content box">
      <h1 className="title is-fluid">Contact</h1>
      <div className="Contact-Details">
        <p className="media">For More information on training with me at Les Mills Dunedin, please use the following contact addresses:</p>
        <ul className="container">
          <li>Mobile: 027 445 3965</li>
          <li>Email: maxsymes@hotmail.com</li>
          <li>Address: Les Mills,
            10/12 Dowling St,
            Dunedin, 9016</li>
          </ul>
      </div>
    </div>
    <div className="tile is-parent is-vertical is-6 box">
      <Map />
    </div>
  </div>




)

{/* <div className="columns has-text-centered level">
  <div className="Contact-Details column is-half box level-left level-item">
    <p className="">For More information on training with me at Les Mills Dunedin, please use the following contact addresses:</p>
    <ul className="">
      <li>Mobile: 027 445 3965</li>
      <li>Email: maxsymes@hotmail.com</li>
      <li>Address: Les Mills,
        10/12 Dowling St,
        Dunedin, 9016</li>
      </ul>
    </div>
  <div className="column box level-right level-item is-4">
    "Google Map Here"
  </div>
</div>

</div> */}

const mapStateToProps = (state) => {

}

export default connect()(Contact)
