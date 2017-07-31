import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GMap = withGoogleMap(props => {

  const { markersList, latLong } = props

  let allMarkers;
  if (markersList.length > 0) {
    allMarkers = markersList.map((marker, i) => {
      return(
        <Marker
          position={marker.position}
          className="marker"
          key={marker.key + i}
        />
      )
    })
  }

  return (
    <div>
      <GoogleMap
        defaultOptions={{
          scrollwheel: false,
        }}
        defaultZoom={10}
        center={Object.keys(latLong).length ? latLong : {lat: 39.7392358, lng: -104.990251}}>
        { allMarkers }
      </GoogleMap>
    </div>
  )
})

export default GMap;
