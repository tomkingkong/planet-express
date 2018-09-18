import { technologies } from '../reducers/technologies';
import { spaceEvents } from '../reducers/spaceEvents';
import { exoplanets } from '../reducers/exoplanets';
import { journey } from '../reducers/journey';
import { news } from '../reducers/news';

  describe('technologies reducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const results = technologies(undefined, {});
      expect(results).toEqual(expected);
    });

    it('should return a state full of technologies', () => {
      const initialState = [];
      const mockTech = [{tech:1}];
      const mockAction = {technologies: mockTech, type:'POPULATE_TECHNOLOGIES'}
      const results = technologies(initialState, mockAction);
      const expected = [{tech:1}];
      expect(results).toEqual(expected);
    });
  });

  describe('spaceEvents reducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const results = spaceEvents(undefined, {});
      expect(results).toEqual(expected);
    });

    it('should return a state full of spaceEvents', () => {
      const initialState = [];
      const mockEevent = [{event:1}];
      const mockAction = {spaceEvents: mockEevent, type:'POPULATE_SPACE_EVENTS'}
      const results = spaceEvents(initialState, mockAction);
      const expected = [{event:1}];
      expect(results).toEqual(expected);
    });
  });

  describe('exoplanets reducer', () => {
    it('should return the initial state', () => {
      const expected = [];
      const results = exoplanets(undefined, {});
      expect(results).toEqual(expected);
    });

    it('should return a state full of exoplanets', () => {
      const initialState = [];
      const mockPlanets = [{planet:1}];
      const mockAction = {exoplanets: mockPlanets, type:'POPULATE_EXOPLANETS'}
      const results = exoplanets(initialState, mockAction);
      const expected = [{planet:1}];
      expect(results).toEqual(expected);
    });
  });

  describe('journey reducer', () => {
    it('should return the initial state', () => {
      const expected = {};
      const results = journey(undefined, {});
      expect(results).toEqual(expected);
    });
