import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Footer.css';

export const Footer = ({ history }) => {
  return (
    <div className="Footer">
      <button className="footer__back" onClick={() => history.goBack()}>Back</button>
      <Link className="profile" to='/profile'>Profile</Link>
    </div>
  )
}

const { object } = PropTypes;
Footer.propTypes = {
  history: object
} 