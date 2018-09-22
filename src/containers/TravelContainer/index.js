import React, { Component } from 'react';
import { array, object } from 'prop-types';
import { connect } from 'react-redux';

import './Travel.css';
import { handleScroll } from '../../utilities/ScrollAnimate';
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
    const planetsCards = this.displayExoplanets();
    return (
      <div className="Travel">
        <header className="travel__title">
          <h4>Available Destinations</h4>
        </header>
        <section className={planetsCards.length ? "travel__locations" : "travel__locations loading"}>
          { planetsCards }
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