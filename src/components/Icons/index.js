import React from 'react';
import { string } from 'prop-types';

import './Icon.css';

export const PlanetIcon = ({ planetMap }) => {
  const planetImageStyle = { backgroundImage: `url(${planetMap})` };
  return (
    <div className="planet__wrapper">
      <div className="planet" style={planetImageStyle} />
    </div>
  );
};

PlanetIcon.propTypes = {
  planetMap: string
};