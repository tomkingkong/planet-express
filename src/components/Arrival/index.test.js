import React from 'react';
import { shallow } from 'enzyme';

import { Arrival } from '.';

describe('Arrival component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Arrival />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send the user to the home page on click', () => {
    const mockFn = jest.fn();
    const history = {replace:mockFn};
    const wrapper = shallow(<Arrival history={history} />);
    wrapper.find('.retire_btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});