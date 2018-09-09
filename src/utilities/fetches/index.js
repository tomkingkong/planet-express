import { Nasa_Key, News_key } from '../api/key';

export const fetchCurry = (originUrl) => (content) => (options) => (method='') => (header) => async (...paths) => {  
  const url = originUrl + paths.join('');
  const body = JSON.stringify(content) || {};
  const headers = header || {'Content-Type': 'application/json'};
  const dataPayload =  options || { method, body, headers };
  
  try {
    const response = await fetch(url, dataPayload);
    return await response.json();
  } catch (error) {
    return error;
  }
};

const API = {
  exoplanets: 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?',
  nasaTech: 'https://techport.nasa.gov/api/projects',
  scienceNews: 'https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey='
}

/*
 ** Add '&format=json' to ensure json return
exoplanets:  requires table query( 'table=exoplanets' )
*/

export const fetchScienceNews = () => fetchCurry(API.scienceNews)()({})()()(News_key);
export const fetchPlanets = () => fetchCurry(API.exoplanets)()({})()()('table=exoplanets','&format=json');
export const fetchTechnologies = () => fetchCurry(API.nasaTech)()({})()()(Nasa_Key);
export const fetchTechnology = (id) => fetchCurry(API.nasaTech)()({})()()('/', id, Nasa_Key);
