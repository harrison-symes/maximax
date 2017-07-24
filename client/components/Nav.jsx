import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showNav: false
    }
  }
  toggleNav() {
    this.setState({showNav: !this.state.showNav})
  }
  scroll(name) {
    this.setState({showNav: false})
    jump(`.${name}`, {offset: 0})
  }
  renderNavItem(item) {
    return (
      <span className="Nav-Item nav-item has-text-centered title link column" onClick={(e) => this.scroll(item)}>
        <h2>{item}</h2>
      </span>
    )
  }
  renderNavIcon() {
    return (
      <span
        className="Nav-Icon nav-right nav-menu title"
        onClick={() => this.toggleNav()}>
        ☰
      </span>
    )
  }
  renderNavItems() {
    return (
      <div className="nav-right nav-menu columns">
          {this.renderNavItem('Trainer')}
          {this.renderNavItem('About')}
          {this.renderNavItem('Training')}
          {this.renderNavItem('Contact')}
      </div>
    )
  }
  renderOption() {
    if (this.state.showNav) return this.renderNavItems()
  }
  render() {
    return <div
      className="Nav nav hero-head is-bold is-dark ">
      <div className="container">
        <div className="nav-left">
          <span className="level-item has-text-centered" onClick={(e) => scroll(e, 'Home')}>
            <img src="http://bulma.io/images/bulma-type.png" style={{height: '30px'}}/>
            {this.renderNavIcon()}
          </span>
          {this.renderOption()}
        </div>
      </div>
    </div>
  }
}

export default connect()(Nav)
