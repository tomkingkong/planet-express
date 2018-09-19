import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { profile } from '../profile';
import { Shuttle } from '../Shuttle';
import { StationContentRoute } from '../StationContentRoute';
import JourneyRoute from '../../containers/JourneyRoute';
import NewsContainer from '../../containers/NewsContainer';

export const PageContentRoute = () => {
  return (
    <Switch>
      <Route exact path='/launch' component={Shuttle} />
      <Route exact path='/profile' component={profile} />
      <Route exact path='/news' component={NewsContainer} />
      <Route path='/ISS/*' component={StationContentRoute} />
      <Route path='/journey' component={JourneyRoute} />
    </Switch>
  );
};