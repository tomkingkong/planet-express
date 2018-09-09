import { 
  populateExoplanets, 
  populateTechnologies, 
  populateNews } from '../actions';
import { 
  fetchPlanets, 
  fetchTechnologies, 
  fetchTechnology, 
  fetchScienceNews } from '../utilities/fetches';
import { 
  exoplanetCleaner, 
  techCleaner } from '../utilities/cleaners/';

export const importExoplanets = () => {
  return async (dispatch) => {
    try {
      const exoplanets = await fetchPlanets();
      const limitPlanets = exoplanets.slice(400, 410);
      const cleanPlanets = exoplanetCleaner(limitPlanets);
      dispatch(populateExoplanets(cleanPlanets));
    } catch (error) {
      console.log(error)
    }
  }
}

export const importTechnologies = () => {
  return async (dispatch) => {
    try {
      const technologies = await fetchTechnologies();
      const limitTechnologies = technologies.projects.projects.slice(0, 10);
      const dirtyTechs = await Promise.all(limitTechnologies.map(tech => fetchTechnology(tech.id)));
      const cleanTechs = techCleaner(dirtyTechs);
      dispatch(populateTechnologies(cleanTechs));
    } catch (error) {
      console.log(error)
    }
  }
}

export const importScienceNews = () => {
  return async (dispatch) => {
    try {
      const scienceNews = await fetchScienceNews();
      const newswithImages = await scienceNews.articles.filter(article => article.urlToImage)
      const limitNews = newswithImages.slice(3, 9);
      dispatch(populateNews(limitNews));
    } catch (error) {
      console.log(error)
    }
  }
}