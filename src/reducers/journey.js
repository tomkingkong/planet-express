export const journey = (state={}, action) => {
  switch(action.type) {
    case 'SET_JOURNEY':
    return action.journey;
    default:
    return state;
  }
}