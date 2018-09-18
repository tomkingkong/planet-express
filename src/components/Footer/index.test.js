import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';

describe('Footer component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should take the user back to their previous page', () => {
    const mockFn = jest.fn();
    const history = {goBack:mockFn};
    const wrapper = shallow(<Footer history={history} />);
    wrapper.find('.footer__back').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});