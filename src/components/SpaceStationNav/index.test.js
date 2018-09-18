import React from 'react';
import { shallow } from 'enzyme';

import { SpaceStationNav } from '.';

describe('SpaceStationNav component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<SpaceStationNav />);
    expect(wrapper).toMatchSnapshot();
  });
});