// import { Nasa_Key, News_key } from '../api/key';
// import { API } from '../api/API';

const Nasa_Key = process.env.Nasa_Key;
const News_key = process.env.News_key;

export const fetchCurry = (originUrl) => async (...paths) => {  
  const url = originUrl + paths.join('');
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return false;
  }
};

const { hubble, nasaTech, scienceNews, exoplanets } = API;

export const fetchSpaceEvents = () => fetchCurry(hubble)('images/');
export const fetchSpaceEvent = (id) => fetchCurry(hubble)('image/', id);

export const fetchTechnologies = () => fetchCurry(nasaTech)(Nasa_Key);
export const fetchTechnology = (id) => fetchCurry(nasaTech)('/', id, Nasa_Key);

export const fetchScienceNews = () => fetchCurry(scienceNews)(News_key);

export const fetchPlanets = () => fetchCurry(exoplanets)(Nasa_Key, '&table=exoplanets', '&format=json');


/*
**** FETCH INFO ****
** use '&format=json' to ensure json return
- exoplanets:  requires table query('table=exoplanets')

** Hubble: queries
- glossary/ (returns all glossary terms + info)
- glossary/:term (return info on term)
- news/ (returns ids)
- news_release/:id (return info on news article)
*/

