import React from 'react';
import { shallow } from 'enzyme';

import { 
  NewsContainer, 
  mapStateToProps } from '.';

describe('News Container', () => {
  it('should match snapshot', () => {
    const mockProps = {
      news: [{}]
    }
    const wrapper = shallow(<NewsContainer {...mockProps} />)
    expect(wrapper).toMatchSnapshot();
  });
