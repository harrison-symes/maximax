import React from 'react'

var referrals = [
  {
    name: 'Jeff',
    content: 'My nama Jeff'
  },
  {
    name: 'Harrison',
    content: 'Very cool website!'
  },
  {
    name: 'Shaan Ingram',
    content: 'My arms got so big!'
  }
]

class Referrals extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      referrals,
      currentReferral: referrals[Math.floor(Math.random() * referrals.length)]
    }
  }
  shuffleRefferals() {
    let current = this.state.currentReferral
    let currentReferral = current
    while (current == currentReferral) {
      currentReferral = referrals[Math.floor(Math.random() * referrals.length)]
    }
    this.setState({currentReferral})
  }
  renderReferral() {
    return (
      <div className="referral">
        <p>{this.state.currentReferral.content || 'No referral'}</p>
        <p>- {this.state.currentReferral.name}</p>
      </div>
    )
  }
  render () {
    return (
      <div className="referrals content" onClick={() => this.shuffleRefferals()}>
        {this.renderReferral()}
      </div>
    )
  }
}

export default Referrals
