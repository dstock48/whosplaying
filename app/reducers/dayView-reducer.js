export const dayView = (state = 2, action) => {
  switch (action.type) {
  case 'SELECT_DAY_VIEW':
    return action.dayView

  default:
    return state;
  }
};
