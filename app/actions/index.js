import cleanEventData from '../helpers/cleanEventData'

export const fetchEventData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then(data => data)
      .then(data => cleanEventData(data))
      .then(data => dispatch(eventData(data)))
      .catch((err) => console.log('ERROR ERROR', err));
  };
};

export const eventData = (events) => {
  return {
    type: 'EVENT_DATA',
    events
  };
};
