import React from 'react';
import { shallow } from 'enzyme';

import { Shuttle } from '.';

describe('Shuttle component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Shuttle />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should allow the user to proceed to the ISS', () => {
    const mockFn = jest.fn();
    const history = { replace: mockFn };
    const wrapper = shallow(<Shuttle history={history}/>);
    wrapper.find('.continue_btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});