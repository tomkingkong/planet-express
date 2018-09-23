import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from '.';

describe('Footer component', () => {
  it('should match snapshot', () => {
    const mockFn = jest.fn();
    const history = {goBack:mockFn, location: {pathname: '/'}};
    const wrapper = shallow(<Footer history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with backbutton', () => {
    const mockFn = jest.fn();
    const history = {goBack:mockFn, location: {pathname: '/ISS'}};
    const wrapper = shallow(<Footer history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should take the user back to their previous page', () => {
    const mockFn = jest.fn();
    const history = {goBack:mockFn, location: {pathname: '/ISS'}};
    const wrapper = shallow(<Footer history={history} />);
    wrapper.find('.footer__back').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});