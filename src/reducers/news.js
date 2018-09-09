export const news = (state=[], action) => {
  switch(action.type) {
    case 'POPULATE_NEWS':
    return action.news;
    default:
    return state;
  }
}