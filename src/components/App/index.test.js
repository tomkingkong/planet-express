import React from 'react';
import App from '.';
import { shallow } from 'enzyme';


describe('App component', () => {  
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})
