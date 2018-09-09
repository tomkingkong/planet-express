import React from 'react';
import { Link } from 'react-router-dom';

export const PreLaunchNav = () => {
  return (
    <div>
      <Link to="/Launch">Launch!</Link>
      <Link to="/News">News</Link>
    </div>
  )
}