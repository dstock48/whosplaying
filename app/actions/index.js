import cleanEventData from '../helpers/cleanEventData'

export const fetchEventData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => {
        const currentLocation = data.meta.geolocation.display_name
        dispatch(setCurrentLocation(currentLocation))
        return cleanEventData(data)
      })
      .then(data => dispatch(eventData(data)))
      .catch((err) => console.log('ERROR ERROR', err));
  };
};

export const setCurrentLocation = (location) => {
  return {
    type: 'LOCATION_CHANGE',
    location
  }
}

export const eventData = (events) => {
  return {
    type: 'EVENT_DATA',
    events
  };
};

export const LatLong = (latLongObj) => {
  return {
    type: 'LAT_LONG',
    latLongObj
  };
};
