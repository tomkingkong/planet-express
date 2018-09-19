import React from 'react';
import { shallow } from 'enzyme';

import App from '.';

describe('App component', () => { 
  
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
