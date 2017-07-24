export const latLong = (state = { lat: 39.7392358, lng: -104.990251 }, action) => {
  switch (action.type) {
  case 'LAT_LONG':
    return action.latLongObj

  default:
    return state;
  }
};
