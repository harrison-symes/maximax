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
  loadMap (center) {
    this.map = new google.maps.Map(this.refs.map, {
      center,
      zoom: 17
    })
    this.marker = new google.maps.Marker({
      position: center,
      map: this.map
    })
  }
  render () {
    let {height, width} = this.state
    return (
        <div className="map" ref="map" >I should be a map!</div>
    )}
  }
