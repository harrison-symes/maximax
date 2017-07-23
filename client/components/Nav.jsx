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


    return <div className="Nav-Table level-left has-text-centered hero-body is-dark">
          {/* <span className="level-item has-text-centered title link" onClick={(e) => scroll(e, 'Home')}>Home </span> */}
          <span className="level-item has-text-centered title link" onClick={(e) => scroll(e, 'Trainer')}>Trainer </span>
          <span className="level-item has-text-centered title link" onClick={(e) => scroll(e, 'About')}>About </span>
          <span className="level-item has-text-centered" onClick={(e) => scroll(e, 'Home')}>
            <img src="http://bulma.io/images/bulma-type.png" style={{height: '30px'}}/>
          </span>
          <span className="level-item has-text-centered title link" onClick={(e) => scroll(e, 'Training')}>Training </span>
          <span className="level-item has-text-centered title link" onClick={(e) => scroll(e, 'Contact')}>Contact </span>
    </div>
  }
  render() {
    return <div
      className="Nav level nav hero is-bold is-dark">
      {this.state.showNav || this.state.mouseOver
        ? this.renderNav()
        : this.renderIcon()
      }
    </div>
  }
}

export default connect()(Nav)
