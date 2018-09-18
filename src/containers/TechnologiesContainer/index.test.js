import React from 'react';
import { shallow } from 'enzyme';
import { 
  TechnologiesContainer, 
  mapStateToProps } from '.';

describe('TechnologiesContainer Container', () => {
  it('should match snapshot', () => {
    const mockProps = {
      technologies: [{}]
    };
    const wrapper = shallow(<TechnologiesContainer {...mockProps} />);
    expect(wrapper).toMatchSnapshot();
  });
