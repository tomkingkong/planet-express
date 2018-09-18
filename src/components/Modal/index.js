import React from 'react';
import { func } from 'prop-types';

import './Confirm.css';

export const Modal = ({ handleConfirm }) => {

  return (
    <div className="Confirm">
      <h4 className="confirm__header">Confirm destination:</h4>
      <div className="confirm__options">
        <button className="confirm__yes" onClick={handleConfirm}>Confirm</button>
        <button className="confirm__no" onClick={handleConfirm}>Decline</button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleConfirm: func
}; 