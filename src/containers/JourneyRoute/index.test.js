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
