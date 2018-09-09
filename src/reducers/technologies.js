export const technologies = (state=[], action) => {
  switch(action.type) {
    case 'POPULATE_TECHNOLOGIES':
    return action.technologies;
    default:
    return state;
  }
}