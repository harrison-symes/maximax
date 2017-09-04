import React from 'react'
import jump from 'jump.js'
import Rainbow from 'rainbowvis.js'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    var rainbow = new Rainbow();
    rainbow.setNumberRange(0, 500);
    rainbow.setSpectrum('999999', 'A0C1D1');
    this.state = {
      showNav: false,
      rainbow,
      cur: 0,
      color: 'white',
      iterator: -1
    }
  }
  componentDidMount() {
    setInterval(this.changeColour.bind(this), 1);
  }
  changeColour() {
    let {cur, iterator, showNav} = this.state
    if (showNav) {
      iterator = (cur == 500 || cur == 0) ? iterator * -1 : iterator
      let color = this.state.rainbow.colourAt(this.state.cur)
      this.setState({color, cur: cur + iterator, iterator})
    }
  }
  toggleNav(e) {
    e.preventDefault()
    this.setState({showNav: !this.state.showNav, cur: 0, iterator: -1})
  }
  scroll(name) {
    this.setState({showNav: false, iterator: -1, cur: 0})
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
      <span className="Nav-Item nav-item has-text-centered title link column"
        style={{marginTop: 0, marginRight: 0}} onClick={(e) => this.scroll('Contact')}>
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
