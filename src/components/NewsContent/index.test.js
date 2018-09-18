import React from 'react';
import { shallow } from 'enzyme';

import { NewsContent } from '.';

describe('NewsContent component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NewsContent />);
    expect(wrapper).toMatchSnapshot();
  });
});