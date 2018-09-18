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
