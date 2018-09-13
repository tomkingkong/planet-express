import React from 'react';
import { Link } from 'react-router-dom';

import './SpaceStation.css';

export const SpaceStationNav = () => {
  const stationImgStyle = {
    backgroundImage: "url(/images/station/ISS_overEarth_1.jpg)"
  }
  return (
    <div className="SpaceStation">
      <div className="station__img" style={stationImgStyle}/>
      <h4 className="station__title">Welcome to the International Space Station</h4>
      <Link className="station__dest" to='/ISS/destinations'>Take a trip!</Link>
      <Link className="station__lab" to='/ISS/store'>Visit SpaceLab</Link>
    </div>
  )
}