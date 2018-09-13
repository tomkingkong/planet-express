import React from 'react';
import PropTypes from 'prop-types';

import './Shuttle.css';

export const Shuttle = ({ history }) => {
  const imgLaunchStyle = {
    backgroundImage: "url(/images/shuttle/shuttle_takeoff_smokey.jpg)"
  }
  const information = 'Launching from Cape Canaveral on DATE, headed for rendezvous with the Internation Space Station.'
  const continueToStation = () => {
    history.replace('/ISS');
  }
  return (
    <div className="Shuttle">
      <div className="shuttle__launch_img" style={imgLaunchStyle} />
      <div className="shuttle__info">
        <h4 className="shuttle__headline">Departing Earth..</h4>
        <p className="shuttle__desc">{information}</p>
      </div>
      <button className="continue_btn" onClick={continueToStation}>continue</button>
    </div>
  )
}


const { object } = PropTypes;
Shuttle.propTypes = {
  history: object
} 
