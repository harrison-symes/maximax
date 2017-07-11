import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (e, name) => {
  console.log("jump", name);
  jump(`.${name}`, {offset: 0})
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: true,
      mouseOver: false
    }
  }
  toggleShow() {
    console.log("clicked");
    this.setState({showNav: !this.state.showNav})
  }
  mouseOn() {
    this.setState({mouseOver: true})
  }
  mouseOff() {
    this.setState({mouseOver: false})
  }
  renderIcon() {
    return <p className="nav-icon">&#9776;</p>
  }
  renderNav() {
    return <table className="Nav-Table">
      <tbody>
        <tr>
          <td onClick={(e) => scroll(e, 'Home')}>Home</td>
          <td onClick={(e) => scroll(e, 'About')}>About</td>
          <td onClick={(e) => scroll(e, 'Trainer')}>Trainer</td>
          <td onClick={(e) => scroll(e, 'Training')}>Training</td>
          <td onClick={(e) => scroll(e, 'Facilities')}>Facilities</td>
          <td onClick={(e) => scroll(e, 'Contact')}>Contact</td>
        </tr>
      </tbody>
    </table>
  }
  render() {
    return <div
      className="Nav"
      onMouseOver={(e) => this.mouseOn()}
      onMouseLeave={(e) => this.mouseOff()}
      onClick={(e) => this.toggleShow()} >
      {this.state.showNav || this.state.mouseOver
        ? this.renderNav()
        : this.renderIcon()
      }
    </div>
  }
}

export default connect()(Nav)
