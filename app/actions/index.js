export const fetchEventData = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      
      .then((items) => dispatch(eventData(items)))
      .catch(() => console.log('ERROR ERROR'));
  };
};

export const eventData = (events) => {
  return {
    type: 'EVENT_DATA',
    events
  };
};
