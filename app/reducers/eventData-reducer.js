export const events = (state = [], action) => {
  switch (action.type) {
  case 'EVENT_DATA':
    return action.events

  default:
    return state;
  }
};
