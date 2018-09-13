import React from 'react';
import PropTypes from 'prop-types';

import './PlanetContent.css';

export const PlanetContent = ({
  name, 
  image, 
  distance, 
  hostStar, 
  yearLength, 
  numInSystem,
  discoveryMethod }) => {

  const planetImageStyle = { backgroundImage: `url(${image})` };
  return (
    <article className="PlanetContent">
      <div className="planet__icon" style={planetImageStyle}></div>
      <div className="planet__info">
        <h4 className="planet__title">{name}</h4>
        <p>{numInSystem} planet orbiting star {hostStar}.</p>
        <p>{distance} parsecs from Earth.</p>
        <p>{yearLength.toFixed(2)} of Earth years.</p>
        <p>Disovered using {discoveryMethod}.</p>
      </div>
    </article>
  )
}

const { string } = PropTypes;
PlanetContent.propTypes = {
  publishedAt: string, 
  description: string, 
  urlToImage: string, 
  author: string, 
  title: string, 
  url: string
};