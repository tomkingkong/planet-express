import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { connect } from 'react-redux';

import { handleScroll } from '../../utilities/ScrollAnimate';
import './Travel.css';
import DestinationCard from '../DestinationCard';

export class TravelContainer extends Component {
  displayExoplanets = () => {
    const { exoplanets, history } = this.props;
    return exoplanets.map((planet, i) => (
      <DestinationCard 
        key={i} 
        planet={planet} 
        history={history} 
      />
    ));
  }

  render() {
    handleScroll('.travel__locations', '.travel__title');
    return (
      <div className="Travel">
        <header className="travel__title">
          <h4>Available Destinations</h4>
        </header>
        <section className="travel__locations">
          { this.displayExoplanets() }
        </section>
      </div>
    );
  }
}

TravelContainer.propTypes = {
  exoplanets: array,
  history: object
};

export const mapStateToProps = ({ exoplanets }) => ({ exoplanets });

export default connect(mapStateToProps, null)(TravelContainer);