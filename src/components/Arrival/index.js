import React from 'react';
import { object } from 'prop-types';

import './Arrival.css';
import { PlanetContent } from '../../components/PlanetContent';

export const Arrival = ({ 
  history,
  destination }) => {
    return (
      <article className="Arrival">
        <h3 className="arrival__title">You have arrived!</h3>
        <div className="space">
          <PlanetContent {...destination} />
        </div>
        <button className="retire_btn" onClick={() => history.replace('/')}>Click to return Home</button>
      </article>
    );
}

Arrival.propTypes = {
  destination: object,
  history: object
}