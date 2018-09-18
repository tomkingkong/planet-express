import React from 'react';
import { shallow } from 'enzyme';

import { Arrival } from '.';

describe('Arrival component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Arrival />);
    expect(wrapper).toMatchSnapshot();
  });
