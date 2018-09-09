import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { TechnologyContent } from '../../components/TechnologyContent';

export class TechnologiesContainer extends Component {

  displayTechnologies = () => {
    const { technologies } = this.props;
    return technologies.map((tech, i) => <TechnologyContent {...tech} key={i} />);
  }

  render() {
    return (
      <div className="technologies">
        {this.displayTechnologies()}
      </div>
    )
  }
}

TechnologiesContainer.propTypes = {
  technologies: PropTypes.array
}

export const mapStateToProps = ({ technologies }) => ({ technologies });

export default connect(mapStateToProps, null)(TechnologiesContainer);

