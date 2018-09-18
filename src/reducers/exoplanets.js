export const exoplanets = (state=[], action) => {
  switch (action.type) {
    case 'POPULATE_EXOPLANETS':
      return action.exoplanets;
    default:
      return state;
  }
};