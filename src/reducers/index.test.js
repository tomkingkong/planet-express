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

