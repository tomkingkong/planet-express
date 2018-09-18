import * as actions from '../actions';

  describe('actions', () => {
    it('should create an object with an exoplanets array and type POPULATE_EXOPLANETS', () =>{
      const mockExoplanets = [{ planet:1 }, { planet:2 }];
      const results = actions.populateExoplanets(mockExoplanets);
      const expected = {type:'POPULATE_EXOPLANETS', exoplanets:mockExoplanets};
      expect(results).toEqual(expected);
    });
