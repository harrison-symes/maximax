import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'underscore'
const googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyBXthm1gu3zhhwKzWA0EPSW_TI-XY9MEIU"

//AIzaSyBXthm1gu3zhhwKzWA0EPSW_TI-XY9MEIU
// const google = window.google;

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
    {console.log(props)}
  </GoogleMap>
))

export default function Map(props) {
  let markers = []
  return (
    <GettingStartedGoogleMap
      containerElement={
        <div style={{ height: `100%` }} />
      }
      mapElement={
        <div style={{ height: `100%` }} />
      }
      onMapLoad={_.noop}
      onMapClick={_.noop}
      markers={markers}
      onMarkerRightClick={_.noop}
    />
  )
}




//
// export default class Map extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       style: {
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'grey'
//       }
//     }
//   }
//   render() {
//
//   }
// }
