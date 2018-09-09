import { combineReducers } from 'redux';
import { exoplanets } from './exoplanets';
import { technologies } from './technologies';
import { news } from './news';

export const rootReducer = combineReducers({
  exoplanets,
  technologies,
  news
})