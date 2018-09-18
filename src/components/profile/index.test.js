import React from 'react';
import { shallow } from 'enzyme';

import { Profile } from '.';

describe('profile component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Profile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send the user back to the previous page', () => {
    const mockFn = jest.fn();
    const history = { goBack: mockFn };
    const wrapper = shallow(<Profile history={history}/>);
    wrapper.find('.profile__back_btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});