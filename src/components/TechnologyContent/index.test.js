import React from 'react';
import { shallow } from 'enzyme';

import { TechnologyContent } from '.';

describe('TechnologyContent component', () => {
  it('should match snapshot', () => {
    const mockProps = {
      org: '', 
      title: '', 
      status: '',
      benefits: [], 
      techAreas: ['words, bro'], 
      description: '' 
    }
    const wrapper = shallow(
    <TechnologyContent 
      {...mockProps}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});