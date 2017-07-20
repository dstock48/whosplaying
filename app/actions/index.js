import cleanEventData from '../helpers/cleanEventData'

export const fetchLocalEventData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => data)
      .then(data => cleanEventData(data))
      .then(data => dispatch(eventData(data)))
      .catch((err) => console.log('ERROR ERROR', err));
  };
};

export const fetchSpecificEventData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => data)
      .then(data => cleanEventData(data))
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
