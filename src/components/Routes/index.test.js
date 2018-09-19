import React from 'react';
import { shallow, render } from 'enzyme';
import { MemoryRouter } from 'react-router';

import { Routes } from '.';

describe('Routes component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with /profile path', () => {
    const wrapper = shallow(<Routes location={{pathname: '/profile'}} />);
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <Routes location={{pathname: '/profile'}} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with / path', () => {
    const wrapper = shallow(<Routes location={{pathname: '/'}} />);
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes location={{pathname: '/'}} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});