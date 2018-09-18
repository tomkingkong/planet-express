import React from 'react';
import { shallow } from 'enzyme';

import { PreLaunchNav } from '.';

describe('PreLaunchNav component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PreLaunchNav />);
    expect(wrapper).toMatchSnapshot();
  });
});