import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GMap = withGoogleMap(props => {

  const { markersList, latLong, zoomLevel, latLongVenue } = props

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
        defaultZoom={zoomLevel || 10}
        center={latLongVenue || latLong}>
        { allMarkers }
      </GoogleMap>
    </div>
  )
})

export default GMap;
