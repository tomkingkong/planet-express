import { 
  importTechnologies,
  importScienceNews, 
  importSpaceEvents,
  importExoplanets } from '..';
  
describe('importTechnologies', () => {
  it('should return false if importTechnologies fails', async () => {
    const mockDispatch = jest.fn();
    const thunk = importTechnologies();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.reject(false)
    }));
    const results = await thunk(mockDispatch);
    expect(results).toEqual(false);
  });
});
describe('importExoplanets', () => {
  it('should return false if importExoplanets fails', async () => {
    const mockDispatch = jest.fn();
    const thunk = importExoplanets();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.reject(false)
    }));
    const results = await thunk(mockDispatch);
    expect(results).toEqual(false);
  });
});
describe('importScienceNews', () => {
  it('should return false if importScienceNews fails', async () => {
    const mockDispatch = jest.fn();
    const thunk = importScienceNews();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.reject(false)
    }));
    const results = await thunk(mockDispatch);
    expect(results).toEqual(false);
  });
});
describe('importSpaceEvents', () => {
  it('should return false if importSpaceEvents fails', async () => {
    const mockDispatch = jest.fn();
    const thunk = importSpaceEvents();
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: false,
        json: () => Promise.reject(false)
    }));
    const results = await thunk(mockDispatch);
    expect(results).toEqual(false);
  });
});