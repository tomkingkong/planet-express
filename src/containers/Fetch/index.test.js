import React from 'react';
import { shallow } from 'enzyme';

import { 
  Fetch, 
  mapStateToProps, 
  mapDispatchToProps } from '.';
import { 
  importTechnologies,
  importScienceNews, 
  importSpaceEvents,
  importExoplanets } from '../../thunks/';

jest.mock('../../thunks/');
jest.mock('../../utilities/fetches/');
jest.mock('../../utilities/cleaners/exoplanetImages.js')

describe('Fetch Container', () => {
  let props;
  
  beforeEach(() => {
    props = {
      exoplanets: [{}],
      spaceEvents: [{}],
      news: [{}],
      technologies: [{}],
      importTechnologies: jest.fn(),
      importScienceNews: jest.fn(), 
      importSpaceEvents: jest.fn(),
      importExoplanets: jest.fn()
    }
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<Fetch />);
    expect(wrapper).toMatchSnapshot();
  });
