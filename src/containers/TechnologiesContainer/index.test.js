import React from 'react';
import { shallow } from 'enzyme';
import { 
  TechnologiesContainer, 
  mapStateToProps } from '.';

describe('TechnologiesContainer Container', () => {
  it('should match snapshot', () => {
    const mockProps = {
      technologies: [{}]
    };
    const wrapper = shallow(<TechnologiesContainer {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should be provided with a technologies array from props', () => {
      const mockState = {
        spaceEvents: [{}, {}],
        technologies: [],
        exoplanets: [],
        journey: {},
        news: []
      }
      const expected = { technologies: [] };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});