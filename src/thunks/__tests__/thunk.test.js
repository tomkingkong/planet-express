import { 
  importTechnologies,
  importScienceNews, 
  importSpaceEvents,
  importExoplanets,
  createJourney } from '..';
import * as actions from '../../actions';
import * as mockData from '../../utilities/mockData/mockData';

jest.mock('../../utilities/fetches/');
jest.mock('../../utilities/cleaners/exoplanetImages.js');

describe('importExoplanets', () => {
  it('should call dispatch with populateExoplanets when importExoplanets is called', async () => {
      const mockDispatch = jest.fn();
      const thunk = importExoplanets();
      await thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(actions.populateExoplanets(mockData.actionExoplanets));
    });
  });
  
describe('importTechnologies', () => {
  it('should call dispatch with populateTechnologies when importTechnologies is called', async () => {
    const mockDispatch = jest.fn();
    const thunk = importTechnologies();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.populateTechnologies(mockData.actionTechs));
  });
});

describe('importScienceNews', () => {
  it('should call dispatch with populateScienceNews when importScienceNews is called', async () => {
    const mockDispatch = jest.fn();
    const thunk = importScienceNews();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.populateNews(mockData.actionsNews));
  });
});

describe('importSpaceEvents', () => {
  it('should call dispatch with populateSpaceEvents when importSpaceEvents is called', async () => {
    const mockDispatch = jest.fn();
    const thunk = importSpaceEvents();
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.populateSpaceEvents(mockData.actionSpaceEvents));
  });
});

describe('createJourney', () => {
  it('should call dispatch with createJourney when createJourney is called', () => {
    const mockDispatch = jest.fn();
    const mockJourey = {"encounters":[], "planetId": "id"};
    const thunk = createJourney([], 'id');
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(actions.setJourney(mockJourey));
  });
});