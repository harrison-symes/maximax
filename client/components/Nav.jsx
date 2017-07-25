import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import jump from 'jump.js'
import Rainbow from 'rainbowvis.js'

class Nav extends React.Component {
  constructor(props) {
    super(props)
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, 1000);
    rainbow.setSpectrum('000000', 'A0C1D1');
    this.state = {
      showNav: false,
      rainbow,
      cur: 0,
      color: 'white'
    }
  }
  componentDidMount() {
    console.log("mounted", this.state);
    setInterval(this.changeColour.bind(this), 1);
  }
  changeColour() {
      let color = this.state.rainbow.colourAt(this.state.cur)
      this.setState({color, cur: this.state.cur + 1})
  }
  toggleNav(e) {
    e.preventDefault()
    this.setState({showNav: !this.state.showNav, cur: 0})
  }
  scroll(name) {
    this.setState({showNav: false})
    jump(`.${name}`, {offset: -100})
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
      <span>
        <a
          href="#"
          className="Nav-Icon nav-right nav-menu title"
          onClick={(e) => this.toggleNav(e)}>
          {this.state.showNav ? '🗙' : '☰'}
        </a>
      </span>
    )
  }
  renderContactButton() {
    return (
      <span className="Nav-Item nav-item has-text-centered title link column" onClick={(e) => this.scroll('Contact')}>
        <h2
          className="Contact-Button"
          style={{color: `#` + this.state.color}}
          >Contact</h2>
      </span>
    )
  }
  renderNavItems() {
    return (
      <div className="Nav-Items nav-right nav-menu columns">
          {this.renderNavItem('Trainer')}
          {this.renderNavItem('About')}
          {this.renderNavItem('Training')}
          {this.renderContactButton()}
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
