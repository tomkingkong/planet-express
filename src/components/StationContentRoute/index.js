import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TravelContainer from '../../containers/TravelContainer';
import TechnologiesContainer from '../../containers/TechnologiesContainer';

export const StationContentRoute = () => {
  return (
    <Switch>
      <Route path="/ISS/destinations" component={TravelContainer} />
      <Route path="/ISS/store" component={TechnologiesContainer} />
    </Switch>
  )
}