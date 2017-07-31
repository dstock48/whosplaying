export const latLong = (state = {}, action) => {
  switch (action.type) {
  case 'LAT_LONG':
    return action.latLongObj

  default:
    return state;
  }
};
