import * as actions from '../actions';

  describe('actions', () => {
    it('should create an object with an exoplanets array and type POPULATE_EXOPLANETS', () =>{
      const mockExoplanets = [{ planet:1 }, { planet:2 }];
      const results = actions.populateExoplanets(mockExoplanets);
      const expected = {type:'POPULATE_EXOPLANETS', exoplanets:mockExoplanets};
      expect(results).toEqual(expected);
    });
    
    it('should create an object with an spaceEvents array and type POPULATE_NEWS', () =>{
      const mockNews = [{ news:1 }, { news:2 }];
      const results = actions.populateNews(mockNews);
      const expected = {type:'POPULATE_NEWS', news:mockNews};
      expect(results).toEqual(expected);
    });
    
    it('should create an object with an technologies array and type POPULATE_SPACE_EVENTS', () =>{
      const mockEvents = [{ event:1 }, { event:2 }];
      const results = actions.populateSpaceEvents(mockEvents);
      const expected = {type:'POPULATE_SPACE_EVENTS', spaceEvents:mockEvents};
      expect(results).toEqual(expected);
    });

    it('should create an object with an news array and type POPULATE_TECHNOLOGIES', () =>{
      const mockTech = [{ tech:1 }, { tech:2 }];
      const results = actions.populateTechnologies(mockTech);
      const expected = {type:'POPULATE_TECHNOLOGIES', technologies:mockTech};
      expect(results).toEqual(expected);
    });

    it('should create an object with a journey object and type SET_JOURNEY', () =>{
      const mockJourney = { planet: 1, encounters:[] };
      const results = actions.setJourney(mockJourney);
      const expected = {type:'SET_JOURNEY', journey:mockJourney};
      expect(results).toEqual(expected);
    });
  })