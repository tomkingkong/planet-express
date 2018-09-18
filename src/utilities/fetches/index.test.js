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

describe('fetchSpaceEvents', () => {
  it('should fetch an array of space events through hubble url', async () => {
    const mockUrl = API.hubble;
    const expected = [mockUrl + 'images/'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( )
    }));
    await fetchSpaceEvents();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});

describe('fetchSpaceEvent', () => {
  it('should fetch a space event through hubble url and id', async () => {
    const mockId = 12;
    const mockUrl = API.hubble;
    const expected = [mockUrl + 'image/' + mockId];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( )
    }));
    await fetchSpaceEvent(mockId);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});

describe('fetchTechnologies', () => {
  it('should fetch an array of technologies through nasaTech url', async () => {
    const mockUrl = API.nasaTech;
    const expected = [mockUrl + Nasa_Key];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( )
    }));
    await fetchTechnologies();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});

describe('fetchTechnology', () => {
  it('should fetch a single technology through nasaTech url', async () => {
    const mockUrl = API.nasaTech;
    const mockId = 12;
    const expected = [mockUrl + '/' + mockId + Nasa_Key];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve( )
    }));
    await fetchTechnology(mockId);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});
