import React from 'react';
import { shallow } from 'enzyme';

import { TravelContainer, mapStateToProps } from '../TravelContainer';

describe('Travel Container', () => {
  const mockPlanets = [
    {
      name: 'HD 16141 b',
      mass: 0.26,
      image: '/images/alternative/exoplanet_rocky_5.jpg',
      distance: 35.91,
      numInSystem: '1st',
      yearLength: 75.523,
      hostStar: 'HD 16141',
      numMoons: 0,
      discoveryBy: 'W. M. Keck Observatory',
      discoveryMethod: 'Radial Velocity'
    }
  ]
  it('should match snapshot', () => {
    const wrapper = shallow(<TravelContainer exoplanets={[{}]} history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with planet data', () => {
    const wrapper = shallow(<TravelContainer exoplanets={mockPlanets} history={{}}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should receive an exoplanets array from props', () => {
      const mockState = {
        exoplanets: [ {planet: 1} ],
        technologies: [],
        spaceEvents: [],
        journey: {},
        news: []
      };
      const expected = {exoplanets: [ {planet: 1} ]};

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });
});