import {
  fetchCurry,
  fetchPlanets,
  fetchTechnology,
  fetchSpaceEvent,
  fetchSpaceEvents,
  fetchScienceNews,
  fetchTechnologies } from '.';
import { Nasa_Key, News_key } from '../api/key';
import { API } from '../api/API';

describe('fetchCurry', () => {
  it('should return false if no data came back', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.reject(false)
    }));
    const result = await fetchCurry(API.hubble)('images/');
    expect(result).toEqual(false);
  });
});
