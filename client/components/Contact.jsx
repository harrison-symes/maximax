import React from 'react'
import Map from './Map'

const Contact = () => (
  <div className="Contact container tile is-anscestor has-text-centered">
      <div className="tile is-parent is-vertical is-6 content">
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
      <div className="tile is-parent is-vertical is-6">
        <div className="tile is-fluid container has-text-centered">
          <Map />
        </div>
      </div>
  </div>
)

export default Contact
