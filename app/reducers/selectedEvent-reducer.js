export const selectedEvent = (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_EVENT':
    return action.event

  default:
    return state;
  }
};
