import React from 'react';
import { shallow } from 'enzyme';
import { 
  JourneyRoute, 
  mapStateToProps } from '.';
import * as mockData from '../../utilities/mockData/mockData';

describe('JourneyRoute Container', () => {
  const mockJourney = {
    encounters: [4229],
    planetId: "HD 16141 b"
  }
  it('should match snapshot with journey', () => {
    const mockProps = {
      history: {},
      journey: mockJourney,
      exoplanets: mockData.actionExoplanets,
      spaceEvents: mockData.actionSpaceEvents,
    }
    const wrapper = shallow(<JourneyRoute {...mockProps} />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot without journey', () => {
    const mockProps = {
      history: {},
      journey: {},
      exoplanets: [],
      spaceEvents: [],
    }
    const wrapper = shallow(<JourneyRoute {...mockProps} />)
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should be provided with a spaceEvents and exoplanets array and journey object from props', () => {
      const mockState = {
        exoplanets: [],
        spaceEvents: [{}, {}],
        news: [],
        journey: {},
        technologies: []
      }
      const expected = { exoplanets: [], spaceEvents: [{}, {}], journey: {} };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});

