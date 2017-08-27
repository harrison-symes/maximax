import React from 'react'
import Map from './Map'

const Contact = () => (
  <div className="Contact container tile is-anscestor has-text-centered">
      <div className="tile is-parent is-vertical is-6 content">
        <h1 className="title is-fluid">Contact <img src='/images/icons/compass.svg' className="jam-icon"/></h1>
        <div className="Contact-Details tile is-child">
          <p className="">For More information on training with me at Les Mills Dunedin, please use the following contact addresses:</p>
            <p ><img src="/images/icons/phone.svg" className="jam-icon" /> Mobile: 027 445 3965</p>
            <p ><img src="images/icons/envelope-open.svg" className="jam-icon" /> Email: maxsymes@hotmail.com</p>
            <p><img src="images/icons/compass.svg" className="jam-icon"/> Address: Les Mills,
              10/12 Dowling St,
              Dunedin, 9016</p>
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
