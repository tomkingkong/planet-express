import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { NavRoute } from '.';

describe('NavRoute component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<NavRoute />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /profile path', () => {
    const wrapper = shallow(<NavRoute location={{pathname: '/profile'}} />);
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <NavRoute location={{pathname: '/profile'}} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with / path', () => {
    const wrapper = shallow(<NavRoute location={{pathname: '/'}} />);
    render(
      <MemoryRouter initialEntries={['/']}>
        <NavRoute location={{pathname: '/'}} />
      </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot();
  });
});