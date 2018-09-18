import React from 'react';
import { Link } from 'react-router-dom';

import './PreLaunchNav.css';

export const PreLaunchNav = () => {
  return (
    <div className="preLaunchNav">
      <Link className="launch" to="/Launch">
        <p>Launch!</p>
      </Link>
      <Link className="news" to="/News">
        <p>News</p>
      </Link>
    </div>
  );
};