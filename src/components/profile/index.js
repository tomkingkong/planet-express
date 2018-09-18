import React from 'react';
import { object } from 'prop-types';

import './profile.css';

export const Profile = ({ history }) => {
  return (
    <div className="profile">
      <button 
        className="profile__back_btn" 
        onClick={() => history.goBack()}>
      Back</button>
      <h1>Under Construction</h1>
    </div>
  )
}

Profile.propTypes = {
  history: object
} 