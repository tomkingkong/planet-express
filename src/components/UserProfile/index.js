import React from 'react';
import { object } from 'prop-types';

import './profile.css';

export const UserProfile = ({ history }) => {
  return (
    <div className="profile">
      <button 
        className="profile__back_btn" 
        onClick={() => history.goBack()}>
      Back</button>
      <h1>Under Construction</h1>
    </div>
  );
};

UserProfile.propTypes = {
  history: object
}; 