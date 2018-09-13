import React from 'react';
import PropTypes from 'prop-types';

import './Encounter.css';

export const Encounter = ({
  name, 
  nextEvent,
  description, 
  image_files }) => {
  const encounterImgStyle = {
    backgroundImage: `url(${image_files[0].file_url})`
  }
  return (
    <article className="Encounter">
      <div className="encounter__img" style={encounterImgStyle} />
      <h4 className="encounter__title">{name}</h4>
      <p className="encounter__desc">{description}</p>
      <button className="continue__btn" onClick={nextEvent}>continue</button>
    </article>
  )
}

const { string, array } = PropTypes;
Encounter.propTypes = {
  name: string,
  description: string,
  images_files: array
}