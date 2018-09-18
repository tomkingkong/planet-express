import * as mockData from '../../mockData/mockData';

export const fetchSpaceEvents = () => {
  try { return mockData.spaceEvents } catch (error) { return false };
}

export const fetchSpaceEvent = (id) => {
  try { return mockData.mappedSpaceEvent } catch (error) { return false };
}

export const fetchTechnologies = () => {
  try { return mockData.technologyIds } catch (error) { return false };
}

export const fetchTechnology = (id) => {
  try { return mockData.technology } catch (error) { return false };
}

export const fetchScienceNews = () => {
  try { return mockData.newsArray } catch (error) { return false };
}

export const fetchPlanets = () => {
  try { return mockData.exoplanets } catch (error) { return false };
}