import React from 'react';
import { shallow } from 'enzyme';

import { Profile } from '.';

describe('profile component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });
