import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Destinations.css';
import PlanetContainer from '../PlanetContainer';

export class Destinations extends Component {
  displayExoplanets = () => {
    const { exoplanets, history } = this.props;
    return exoplanets.map((planet, i) => (
      <PlanetContainer 
        key={i} 
        planet={planet} 
        history={history} 
      />
    ));
  }

  render() {
    return (
      <div className="Destinations">
        <h4 className="dest__title">Destinations</h4>
        <section className="dest__locations">
        {this.displayExoplanets()}
        </section>
      </div>
    )
  }
}

const { array, func } = PropTypes;
Destinations.propTypes = {
  exoplanets: array,
  createJourney: func, 
  spaceEvents: array
};

export const mapStateToProps = ({ exoplanets }) => ({ exoplanets });

export default connect(mapStateToProps, null)(Destinations);

