import React from 'react'
import Map from './Map'

const Contact = () => (
  <div className="Contact container tile is-anscestor has-text-centered">
    <div className="tile media is-parent is-vertical is-6 content">
      <h1 className="title is-fluid">Contact</h1>
      <div className="Contact-Details is-left tile is-child">
        <p className="">For More information on training with me at Les Mills Dunedin, please use the following contact addresses:</p>
          <p><img src="images/icons/phone.svg" className="jam-icon" /> <strong>Mobile:</strong> 027 445 3965</p>
          <p><img src="images/icons/envelope-open.svg" className="jam-icon" /> <strong>Email:</strong> maxsymes@hotmail.com</p>
          <p><img src="images/icons/compass.svg" className="jam-icon"/> <strong>Address:</strong> Les Mills,
            10/12 Dowling St,
            Dunedin, 9016</p>
          <a href="https://www.instagram.com/symesmax"><img className="jam-icon" src="images/icons/instagram.svg" /> <strong>Instagram:</strong> @symesmax</a>
      </div>
    </div>
    <div className="tile is-parent is-vertical is-6">
      <div className="tile is-child has-text-centered">
        <Map />
      </div>
    </div>
  </div>
)

export default Contact
