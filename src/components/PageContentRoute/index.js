import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Profile } from '../Profile';
import { Shuttle } from '../../components/Shuttle';
import { StationContentRoute } from '../StationContentRoute';
import JourneyRoute from '../../containers/JourneyRoute';
import NewsContainer from '../../containers/NewsContainer';

export const PageContentRoute = () => {
  return (
    <Switch>
      <Route exact path='/launch' component={Shuttle} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/news' component={NewsContainer} />
      <Route path='/ISS/*' component={StationContentRoute} />
      <Route path='/journey' component={JourneyRoute} />
    </Switch>
  );
};