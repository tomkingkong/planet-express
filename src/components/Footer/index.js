import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = ({ history }) => {
  return (
    <div className="Footer">
      <button className="footer__back" onClick={() => history.goBack()}>Back</button>
      <Link className="profile__btn" to='/profile'>Profile</Link>
    </div>
  );
};

Footer.propTypes = {
  history: object
}; 