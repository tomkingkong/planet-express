import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { NavRoute } from '.';

describe('NavRoute component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NavRoute />);
    expect(wrapper).toMatchSnapshot();
  });
