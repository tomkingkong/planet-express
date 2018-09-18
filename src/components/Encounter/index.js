import React, { Component } from 'react';
import { string, array } from 'prop-types';

import './Encounter.css';

export default class Encounter extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
  }
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