import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { DestinationContent } from '../../components/DestinationContent';

export class Destinations extends Component {

  displayExoplanets = () => {
    const { exoplanets } = this.props;
    return exoplanets.map((planet, i) => <DestinationContent {...planet} key={i} />);
  }

  render() {
    return (
      <div className="destinations">
        {this.displayExoplanets()}
      </div>
    )
  }
}

Destinations.propTypes = {
  exoplanets: PropTypes.array
}

export const mapStateToProps = ({ exoplanets }) => ({ exoplanets });
// export const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(Destinations);

