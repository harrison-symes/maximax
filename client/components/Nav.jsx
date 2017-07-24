import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'

const scroll = (name) => {
  console.log("jump", name);
  jump(`.${name}`, {offset: 0})
}

class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  renderNavItem(item) {
    return (
      <span className="Nav-Item nav-item has-text-centered title link" onClick={(e) => scroll(item)}>
        {item}
      </span>
    )
  }
  render() {
    return <div
      className="Nav nav hero-head is-bold is-dark">
      <div className="container">
        <div class="nav-left">
          <span className="level-item has-text-centered" onClick={(e) => scroll(e, 'Home')}>
            <img src="http://bulma.io/images/bulma-type.png" style={{height: '30px'}}/>
          </span>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <div>
            {this.renderNavItem('Trainer')}
            {this.renderNavItem('About')}
          </div>
          <div>
            {this.renderNavItem('Training')}
            {this.renderNavItem('Contact')}
          </div>
        </div>
      </div>
    </div>
  }
}

export default connect()(Nav)
