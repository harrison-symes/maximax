import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e, name) => {
  console.log("jump", name);
  jump(`.${name}`, {offset: -35})
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMousedOver: false
    }
  }
  toggleShow() {
    this.setState({isMousedOver: !this.state.isMouseOver})
  }
  renderIcon() {
    return <p sclassName="nav-icon">&#9776;</p>
  }
  renderNav() {
    return <table className="Nav-Table">
      <tbody>
        <tr>
          <td onClick={(e) => scroll(e, 'Home')}>Home</td>
          <td onClick={(e) => scroll(e, 'About')}>About</td>
          <td onClick={(e) => scroll(e, 'Trainers')}>Trainers</td>
          <td onClick={(e) => scroll(e, 'Training')}>Training</td>
          <td onClick={(e) => scroll(e, 'Facilities')}>Facilities</td>
          <td onClick={(e) => scroll(e, 'Contact')}>Contact</td>
        </tr>
      </tbody>
    </table>
  }
  render() {
    return <div className="Nav" onClick={(e) => this.toggleShow()()} >
      {this.state.isMouseOver
        ? this.renderNav()
        : this.renderIcon()
      }
    </div>
  }
}

export default connect()(Nav)
