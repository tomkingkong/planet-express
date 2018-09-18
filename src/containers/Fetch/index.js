import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';

import { 
  importTechnologies,
  importScienceNews, 
  importSpaceEvents,
  importExoplanets } from '../../thunks';

export class Fetch extends Component {
  async componentDidMount() {
    const { 
      news, 
      exoplanets, 
      spaceEvents,
      technologies, 
      importExoplanets,
      importSpaceEvents, 
      importScienceNews, 
      importTechnologies } = this.props;
      
    if (news.length < 1) await importScienceNews();
    if (exoplanets.length < 1) await importExoplanets();
    if (spaceEvents.length < 1) await importSpaceEvents();
    if (technologies.length < 1) await importTechnologies();
  }
  render() {
    return (<React.Fragment></React.Fragment>);
  }
}

Fetch.propTypes = {
  news: array, 
  exoplanets: array, 
  spaceEvents: array,
  technologies: array, 
  importExoplanets: func,
  importSpaceEvents: func, 
  importScienceNews: func, 
  importTechnologies: func
};

export const mapStateToProps = ({ 
  news, 
  exoplanets, 
  spaceEvents, 
  technologies 
}) => ({ 
  news, 
  exoplanets, 
  spaceEvents, 
  technologies 
});

export const mapDispatchToProps = (dispatch) => ({
  importTechnologies: () => dispatch(importTechnologies()),
  importScienceNews: () => dispatch(importScienceNews()),
  importSpaceEvents: () => dispatch(importSpaceEvents()),
  importExoplanets: () => dispatch(importExoplanets())
});

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);