import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DestinationsContainer from '../../containers/DestinationsContainer';
import TechnologiesContainer from '../../containers/TechnologiesContainer';

export const StationContentRoute = () => {
  return (
    <Switch>
      <Route path="/ISS/destinations" component={DestinationsContainer} />
      <Route path="/ISS/store" component={TechnologiesContainer} />
    </Switch>
  )
}