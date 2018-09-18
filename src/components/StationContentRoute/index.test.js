import React from 'react';
import { shallow } from 'enzyme';

import { StationContentRoute } from '.';

describe('StationContentRoute component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<StationContentRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});