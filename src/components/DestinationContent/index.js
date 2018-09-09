import React from 'react';
import PropTypes from 'prop-types';

export const DestinationContent = ({ 
  name, 
  distance, 
  numInSystem, 
  yearLength, 
  hostStar, 
  numMoons, 
  discoverBy,
  discoveryMethod }) => {

  return (
    <article className="technology">
      <h4>{name}</h4>
      <p>Orbiting star {hostStar}</p>
      <p>{distance} parsecs from Earth.</p>
      <p>{numInSystem} planet from {hostStar}.</p>
      <p>{yearLength.toFixed(2)} of Earth years.</p>
      <p>{numMoons} moons.</p>
      <p>Discovered by {discoverBy}.</p>
      <p>Disovered using{discoveryMethod}</p>
    </article>
  )
}

DestinationContent.propTypes = {
  data: PropTypes.array
}