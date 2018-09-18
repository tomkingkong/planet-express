import { combineReducers } from 'redux';

import { technologies } from './technologies';
import { spaceEvents } from './spaceEvents';
import { exoplanets } from './exoplanets';
import { journey } from './journey';
import { news } from './news';

export const rootReducer = combineReducers({
  technologies,
  spaceEvents,
  exoplanets,
  journey,
  news
});