import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from '.';

describe('Modal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
});