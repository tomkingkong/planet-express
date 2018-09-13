import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Technologies.css';
import { TechnologyContent } from '../../components/TechnologyContent';

export class TechnologiesContainer extends Component {

  displayTechnologies = () => {
    const { technologies } = this.props;
    return technologies.map((tech, i) => <TechnologyContent {...tech} key={i} />);
  }

  render() {
    return (
      <div className="Technologies">
        <h1 className="technologies__title">SpaceLab</h1>
        {this.displayTechnologies()}
      </div>
    )
  }
}

const { array } = PropTypes;
TechnologiesContainer.propTypes = {
  technologies: array
};

export const mapStateToProps = ({ technologies }) => ({ technologies });

export default connect(mapStateToProps, null)(TechnologiesContainer);

