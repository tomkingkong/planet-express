import React from 'react';
import { shallow } from 'enzyme';

import { 
  NewsContainer, 
  mapStateToProps } from '.';

describe('News Container', () => {
  it('should match snapshot', () => {
    const mockProps = {
      news: [{}]
    };
    const wrapper = shallow(<NewsContainer {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should be provided with a news array from props', () => {
      const mockState = {
        exoplanets: [],
        spaceEvents: [{}, {}],
        news: [],
        journey: {},
        technologies: []
      };
      const expected = { news: [] };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });
});

