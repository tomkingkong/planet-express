import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Encounter } from '../../components/Encounter';
import { Arrival } from '../../components/Arrival';

export class JourneyRoute extends Component {
  constructor() {
    super();
    this.state = {
      page: 0
    }
  }

  render() {
    const { exoplanets, journey, spaceEvents } = this.props;
    const destination = exoplanets
      .find(planet => planet.name === journey.planetId);
    const encounter = spaceEvents
      .find(event => event.id === journey.encounters[this.state.page]);
    return (
      <Switch>
        <Route exact path="/journey/arrival" render={({history}) => <Arrival history={history} destination={destination}/>} />
        <Route path="/journey" render={() => <Encounter nextEvent={this.nextEvent} {...encounter} />} />
      </Switch>
    )
  }
}

const { object, array } = PropTypes;
JourneyRoute.propTypes = {
  journey: object,
  exoplanets: array,
  spaceEvents: array,
};

export const mapStateToProps = ({ 
  journey, 
  exoplanets, 
  spaceEvents }) => ({
    journey,
    exoplanets,
    spaceEvents
  });

export default connect(mapStateToProps, null)(JourneyRoute);