import React from 'react';
import { shallow } from 'enzyme';

import { Shuttle } from '.';

describe('Shuttle component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Shuttle />);
    expect(wrapper).toMatchSnapshot();
  });
