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
