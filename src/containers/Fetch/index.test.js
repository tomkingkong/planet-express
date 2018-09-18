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

  it('importTechnologies should not be called if technologies array has length', async () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Fetch {...props} importTechnologies={mockFn}/>);
    await wrapper.instance().componentDidMount();
    expect(mockFn).not.toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should be provided with a spaceEvents array from props', () => {
      const mockState = {
        exoplanets: [],
        spaceEvents: [{}, {}],
        news: [],
        journey: {},
        technologies: []
      }
      const expected = { spaceEvents: [{}, {}], exoplanets: [], news: [], technologies: [] };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with importTechnologies when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = importTechnologies();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.importTechnologies();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with importScienceNews when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = importScienceNews();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.importScienceNews();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with importSpaceEvents when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = importSpaceEvents();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.importSpaceEvents();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with importExoplanets when it is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = importExoplanets();
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.importExoplanets();
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});