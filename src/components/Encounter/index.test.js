import React from 'react';
import { shallow } from 'enzyme';

import Encounter from '.';

describe('Encounter component', () => {
  let wrapper;
  let mockFiles;

  beforeEach(() => {
    mockFiles = [{file_url:'images'}, {file_url:'images'}, {file_url:'images'}]
    wrapper = shallow(
    <Encounter
      name={'tim'}
      description={'haha'}
      image_files={mockFiles}
    />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with showInfo true', () => {
    wrapper.instance().handleClick();
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default showInfo state of false', () => {
    expect(wrapper.state().showInfo).toEqual(false);
  });

  it('handleClick should toggle showInfo state to true if false', () => {
    wrapper.instance().handleClick();    
    expect(wrapper.state().showInfo).toEqual(true);
  });

  it('handleClick should toggle showInfo state to false if true', () => {
    wrapper.instance().handleClick();
    wrapper.instance().handleClick();
    expect(wrapper.state().showInfo).toEqual(false);
  });
});