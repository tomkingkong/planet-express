import { 
  populateTechnologies,
  populateSpaceEvents, 
  populateExoplanets, 
  populateNews, 
  setJourney } from '../actions';
import { 
  fetchTechnologies, 
  fetchScienceNews,
  fetchSpaceEvents, 
  fetchTechnology,
  fetchSpaceEvent,
  fetchPlanets } from '../utilities/fetches';
import { 
  exoplanetCleaner, 
  techCleaner } from '../utilities/cleaners/';

export const importExoplanets = () => {
  return async (dispatch) => {
    const exoplanets = await fetchPlanets();
    if (!exoplanets) return false;
    const limitPlanets = exoplanets.slice(0, 10);
    const cleanPlanets = exoplanetCleaner(limitPlanets);
    dispatch(populateExoplanets(cleanPlanets));
  };
};

export const importTechnologies = () => {
  return async (dispatch) => {
    const technologies = await fetchTechnologies();
    if (!technologies) return false;
    const limitTechnologies = technologies.projects.projects.slice(0, 10);
    const dirtyTechs = await Promise.all(limitTechnologies
      .map(tech => fetchTechnology(tech.id)));
    const cleanTechs = techCleaner(dirtyTechs);
    dispatch(populateTechnologies(cleanTechs));
  };
};

export const importScienceNews = () => {
  return async (dispatch) => {
    const scienceNews = await fetchScienceNews();
    if (!scienceNews) return false;
    const newswithImages = scienceNews.articles
      .filter(article => article.urlToImage);
    const limitNews = newswithImages.slice(3, 9);
    dispatch(populateNews(limitNews));
  };
};

export const importSpaceEvents = () => {
  return async (dispatch) => {
    const fetchEvents = await fetchSpaceEvents();
    if (!fetchEvents) return false;
    const spaceEvents = await Promise.all(fetchEvents
      .map( async event => { 
        const eventData = await fetchSpaceEvent(event.id);
        return {...eventData, id:event.id};
      }));
    dispatch(populateSpaceEvents(spaceEvents));
  };
};

export const createJourney = (events, planetId) => {
  return dispatch => {
    const encounters = events.slice(14, 18).map(event => event.id);
    const journey = { planetId, encounters };
    dispatch(setJourney(journey));
  };
};