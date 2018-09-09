import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  importScienceNews, 
  importExoplanets, 
  importTechnologies } from '../../thunks';

export class Fetch extends Component {
  async componentDidMount() {
    const { 
      news, 
      technologies, 
      exoplanets, 
      importScienceNews, 
      importExoplanets, 
      importTechnologies } = this.props;
    if (news.length < 1) await importScienceNews();
    if (exoplanets.length < 1) await importExoplanets();
    if (technologies.length < 1) await importTechnologies();
  }
  render() {
    return (<React.Fragment></React.Fragment>)
  }
}

export const mapStateToProps = ({ news, technologies, exoplanets }) => ({ news, technologies, exoplanets });
export const mapDispatchToProps = (dispatch) => ({
  importScienceNews: () => dispatch(importScienceNews()),
  importExoplanets: () => dispatch(importExoplanets()),
  importTechnologies: () => dispatch(importTechnologies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Fetch);