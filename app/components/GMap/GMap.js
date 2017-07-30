import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const GMap = withGoogleMap(props => {

  let { markersList, latLong } = props
// console.dir(Marker);
  let allMarkers;

  if (markersList.length > 0) {
    allMarkers = markersList.map((marker, i) => {
      return <Marker
        position={marker.position}
        className="marker"
        key={marker.key + i}
             />
    })
  }


  // console.log(allMarkers);

  return (
    <div>
      <GoogleMap
        defaultOptions={{
          scrollwheel: false,
        }}
        defaultZoom={10}
        center={latLong}>
        { allMarkers }
      </GoogleMap>
    </div>
  )
})

export default GMap;
