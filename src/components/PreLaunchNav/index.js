import React from 'react';
import { Link } from 'react-router-dom';

import './PreLaunchNav.css';

export const PreLaunchNav = () => {
  return (
    <div className="preLaunchNav">
      <Link className="launch" to="/Launch">
        <p>launch!</p>
      </Link>
      <Link className="news" to="/News">
        <p>news</p>
      </Link>
    </div>
  );
};