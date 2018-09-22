import React from 'react';
import { string, number } from 'prop-types';

import './PlanetContent.css';
import { PlanetIcon } from '../Icons';

export const PlanetContent = ({
  name, 
  image, 
  distance, 
  hostStar, 
  yearLength, 
  numInSystem,
  discoveryMethod }) => {

  return (
    <article className="PlanetContent">
      <div className="planet__arrival">
        <PlanetIcon planetMap={image}/>
      </div>
      <div className="planet__info">
        <h4 className="planet__title">{name}</h4>
        <p>{numInSystem} planet orbiting star {hostStar}.</p>
        <p>{distance} parsecs from Earth.</p>
        <p>{yearLength.toFixed(2)} to one Earth year.</p>
        <p>Disovered using {discoveryMethod}.</p>
      </div>
    </article>
  );
};

PlanetContent.propTypes = {
  discoveryMethod: string, 
  numInSystem: string, 
  yearLength: number, 
  hostStar: string, 
  distance: number, 
  image: string,
  name: string
};