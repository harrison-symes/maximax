import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e, name) => {
  console.log("jump", name);
  jump(`.${name}`, {offset: -35})
}

const Nav = ({dispatch}) => (
  <div className="Nav">
    <img src=""/>
    <table className="Nav-Table">
      <tr>
        <td onClick={(e) => scroll(e, 'Home')}>Home</td>
        <td onClick={(e) => scroll(e, 'About')}>About</td>
        <td onClick={(e) => scroll(e, 'Trainers')}>Trainers</td>
        <td onClick={(e) => scroll(e, 'Training')}>Training</td>
        <td onClick={(e) => scroll(e, 'Facilities')}>Facilities</td>
        <td onClick={(e) => scroll(e, 'Contact')}>Contact</td>
      </tr>
    </table>

  </div>
)



export default connect()(Nav)
