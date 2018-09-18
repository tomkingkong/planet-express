import React from 'react';
import { shallow } from 'enzyme';

import { PlanetContent } from '.';

describe('PlanetContent component', () => {
  it('should match snapshot', () => {
    const mockProps = {
      name: '', 
      image: '', 
      distance: 1, 
      hostStar: '', 
      yearLength: 1, 
      numInSystem: '',
      discoveryMethod: ''
    };
    const wrapper = shallow(
      <PlanetContent 
        {...mockProps}
      />);
    expect(wrapper).toMatchSnapshot();
  });
});