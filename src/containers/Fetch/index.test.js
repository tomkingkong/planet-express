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
