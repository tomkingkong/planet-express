import React from 'react';
import { shallow } from 'enzyme';

import { UserProfile } from '.';

describe('UserProfile component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<UserProfile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should send the user back to the previous page', () => {
    const mockFn = jest.fn();
    const history = { goBack: mockFn };
    const wrapper = shallow(<UserProfile history={history}/>);
    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});