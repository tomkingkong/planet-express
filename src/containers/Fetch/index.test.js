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

  it('importScienceNews should be called if news array does not have length', async () => {
    const mockFn = jest.fn();
    props = {
      exoplanets: [],
      spaceEvents: [],
      news: [],
      technologies: [],
      importTechnologies: jest.fn(),
      importScienceNews: jest.fn(), 
      importSpaceEvents: jest.fn(),
      importExoplanets: jest.fn()
    }
    const wrapper = shallow(<Fetch {...props} importScienceNews={mockFn} />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('importExoplanets should be called if exoplanets array does not have length', async () => {
    const mockFn = jest.fn();
    props = {
      exoplanets: [],
      spaceEvents: [],
      news: [],
      technologies: [],
      importTechnologies: jest.fn(),
      importScienceNews: jest.fn(), 
      importSpaceEvents: jest.fn(),
      importExoplanets: jest.fn()
    }
    const wrapper = shallow(<Fetch {...props} importExoplanets={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('importSpaceEvents should be called if spaceEvents array does not have length', async () => {
    const mockFn = jest.fn();
    props = {
      exoplanets: [],
      spaceEvents: [],
      news: [],
      technologies: [],
      importTechnologies: jest.fn(),
      importScienceNews: jest.fn(), 
      importSpaceEvents: jest.fn(),
      importExoplanets: jest.fn()
    }
    const wrapper = shallow(<Fetch {...props} importSpaceEvents={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('importTechnologies should be called if technologies array does not have length', async () => {
    const mockFn = jest.fn();
    props = {
      exoplanets: [],
      spaceEvents: [],
      news: [],
      technologies: [],
      importTechnologies: jest.fn(),
      importScienceNews: jest.fn(), 
      importSpaceEvents: jest.fn(),
      importExoplanets: jest.fn()
    }
    const wrapper = shallow(<Fetch {...props} importTechnologies={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  it('importScienceNews should not be called if news array has length', async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Fetch {...props} importScienceNews={mockFn} />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('importExoplanets should not be called if exoplanets array has length', async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Fetch {...props} importExoplanets={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).not.toHaveBeenCalled();
  });

  it('importSpaceEvents should not be called if spaceEvents array has length', async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Fetch {...props} importSpaceEvents={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).not.toHaveBeenCalled();
  });

