import React from 'react'
import {connect} from 'react-redux'

const defaultCenter = {
  lat: -45.8764,
  lng: 170.5036
}

export default class Map extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        height: '40vh',
        width: '40vh'
    }
  }

  componentDidMount () {
    this.loadMap(defaultCenter)
  }

  componentWillReceiveProps ({windowWidth}) {
    let {width, height} = this.state
    if (windowWidth < 500) this.setState({width: '40vh', height: '40vh'})
    else this.setState({width: '100%', height: '100%'})
    this.loadMap(defaultCenter)
  }

  loadMap (center) {
    console.log({center});
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 17
    })
    console.log(this.map);
    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    })
  }

  render () {
    let {height, width} = this.state
    return (
        <div style={{height, width}} ref="map" >I should be a map!</div>
    )}
  }
