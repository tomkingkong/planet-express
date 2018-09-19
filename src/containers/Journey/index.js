import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { object, array } from 'prop-types';

import './JourneyRoute.css';
import { arrivalAnimate, startAtBottom } from '../../utilities/ScrollAnimate';
import Encounter from '../../components/Encounter';
import { Arrival } from '../../components/Arrival';

export class Journey extends Component {
  generateEncounters = () => {
    const { journey, spaceEvents } = this.props;
    const encounters = journey.encounters
      .map((eventId, i) => {
        let encounter = spaceEvents
          .find(space => space.id === eventId);
        return <Encounter {...encounter} key={i}/>;
      });
    return encounters;
  }

  render() {
    const { exoplanets, journey, history } = this.props;
    const isOnJourney = Object.keys(journey).length;
    const destination = exoplanets
      .find(planet => planet.name === journey.planetId);
    
    if (!isOnJourney) return <Redirect to="/" />;

    startAtBottom();
    arrivalAnimate();
    return (
      <div className="JourneyRoute">
        <Arrival history={history} destination={destination} />
        { this.generateEncounters() }
        <div className="scroll__arrow">Scroll<br/>^</div>
      </div>
    );
  }
}

Journey.propTypes = {
  history: object,
  journey: object,
  exoplanets: array,
  spaceEvents: array
};

export const mapStateToProps = ({ 
  journey, 
  exoplanets, 
  spaceEvents }) => ({
  journey,
  exoplanets,
  spaceEvents
});

export default connect(mapStateToProps, null)(Journey);