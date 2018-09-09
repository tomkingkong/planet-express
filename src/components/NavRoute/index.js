import React from 'react';
import { Route } from 'react-router-dom';

import { SpaceStationNav } from '../SpaceStationNav'
import { PreLaunchNav } from '../PreLaunchNav';
import { Footer } from '../Footer';

export const NavRoute = () => {
  return (
    <div>
      <Route path="/" render={({ location }) => (location.pathname !== '/profile') && <Footer />} />
      <Route exact path='/' component={PreLaunchNav} />
      <Route exact path='/ISS' component={SpaceStationNav} />
    </div>
  )
}