import React from 'react';
import { shallow } from 'enzyme';
import { 
  DestinationCard, 
  mapStateToProps, 
  mapDispatchToProps } from '.';
import { createJourney } from '../../thunks/';

describe('DestinationCard Container', () => {
  let wrapper;
  let history;
  let mockPlanet;
  let mockJourneyFn;
  let mockHistoryFn;
  let e;

  beforeEach(() => {
    mockPlanet = {
      name:'tim', 
      image:'butts', 
      distance:'far', 
      numInSystem: 1, 
      hostStar:'tim'
    };
    e = {
      persist: jest.fn(),
      stopPropagation: jest.fn(),
      target: {className: 'confirm__no'}
    };
    mockJourneyFn = jest.fn();
    mockHistoryFn = jest.fn();
    history = { replace: mockHistoryFn };
    wrapper = shallow(
      <DestinationCard 
        history={history}
        spaceEvents={[]} 
        planet={mockPlanet}
        createJourney={mockJourneyFn} 
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a default state of toggleConfirmModal set to false', () => {
    expect(wrapper.state().toggleConfirmModal).toEqual(false);
  });

  it('handleConfirm should switch state of toggleConfirmModal back to false if user declines destination', () => {
    wrapper.instance().handleClick();
    e = {
      persist: jest.fn(),
      stopPropagation: jest.fn(),
      target: `<button class="confirm__no">Decline</button>`
    };
    wrapper.instance().handleConfirm(e);
    expect(wrapper.state().toggleConfirmModal).toEqual(false);
  });

  it('handleConfirm should send the user on to their journey if user accepts destination', () => {
    e = {
      persist: jest.fn(),
      stopPropagation: jest.fn(),
      target: { }
    };
    wrapper.instance().handleConfirm(e);
    expect(mockHistoryFn).toHaveBeenCalled();
  });

  it('handleConfirm should call the createJourney thunk', () => {
    e = {
      persist: jest.fn(),
      stopPropagation: jest.fn(),
      target: { }
    };
    wrapper.instance().handleConfirm(e);
    expect(mockJourneyFn).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should be provided with a spaceEvents array from props', () => {
      const mockState = {
        exoplanets: [],
        spaceEvents: [{}, {}],
        news: [],
        journey: {},
        technologies: []
      };
      const expected = { spaceEvents: [{}, {}] };
      const results = mapStateToProps(mockState);
      expect(results).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should call dispatch with createJourney when createJourney is called', () => {
      const mockDispatch = jest.fn();
      const mockJourey = { "journey": {"encounters": [], "planetId": "id"}, "type": "SET_JOURNEY" };
      const thunk = createJourney([], 'id');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.createJourney([], 'id');
      thunk(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(mockJourey);
    });
  });
});