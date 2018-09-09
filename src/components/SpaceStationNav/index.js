import React from 'react';
import { Link } from 'react-router-dom';

export const SpaceStationNav = () => {
  return (
    <div>
      <p>Welcome to the ISS</p>
      <Link to='/ISS/destinations'>Take a trip! >></Link><br/>
      <Link to='/ISS/store'>Visit the Store >></Link>
    </div>
  )
}