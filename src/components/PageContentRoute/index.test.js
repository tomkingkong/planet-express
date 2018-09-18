import React from 'react';
import { shallow } from 'enzyme';

import { PageContentRoute } from '.';

describe('PageContentRoute component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PageContentRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});