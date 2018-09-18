import React from 'react';
import { shallow } from 'enzyme';

import { PlanetIcon } from '.';

describe('PlanetIcon component', () => {
  it('should match planetIcon snapshot', () => {
    const wrapper = shallow(<PlanetIcon planetMap={'images/alternate/exoplanet_habitable_1.png'} />);
    expect(wrapper).toMatchSnapshot();
  });
});