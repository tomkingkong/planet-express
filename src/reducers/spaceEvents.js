export const spaceEvents = (state=[], action) => {
  switch(action.type) {
    case 'POPULATE_SPACE_EVENTS':
    return action.spaceEvents;
    default:
    return state;
  }
}