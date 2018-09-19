import React from 'react';
import { Route } from 'react-router-dom';

import TechnologiesContainer from '../../containers/TechnologiesContainer';
import TravelContainer from '../../containers/TravelContainer';
import NewsContainer from '../../containers/NewsContainer';
import Journey from '../../containers/Journey';
import { SpaceStationNav } from '../SpaceStationNav';
import { PreLaunchNav } from '../PreLaunchNav';
import { Shuttle } from '../Shuttle';
import { Profile } from '../Profile';
import { Footer } from '../Footer';

export const Routes = () => {
  return (
    <div>
      <Route path='/' 
        render={({ location, history }) => 
        (location.pathname !== '/profile') && <Footer history={history} />} />
      <Route exact path='/' component={PreLaunchNav} />
      <Route exact path='/launch' component={Shuttle} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/news' component={NewsContainer} />
      <Route exact path='/ISS' component={SpaceStationNav} />
      <Route path="/ISS/destinations" component={TravelContainer} />
      <Route path="/ISS/store" component={TechnologiesContainer} />
      <Route path='/journey' component={Journey} />
    </div>
  );
};