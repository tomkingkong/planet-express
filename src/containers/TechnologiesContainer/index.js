import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import './Technologies.css';
import { TechnologyContent } from '../../components/TechnologyContent';
import { handleScroll } from '../../utilities/ScrollAnimate';

export class TechnologiesContainer extends Component {

  displayTechnologies = () => {
    const { technologies } = this.props;
    return technologies.map((tech, i) => <TechnologyContent {...tech} key={i} />);
  }

  render() {
    handleScroll('.Technologies', '.technologies__title');
    return (
      <div className="Technologies">
        <header className="technologies__title">
          <h4>SpaceLab</h4>
        </header>
        { this.displayTechnologies() }
      </div>
    );
  }
}

TechnologiesContainer.propTypes = {
  technologies: array
};

export const mapStateToProps = ({ technologies }) => ({ technologies });

export default connect(mapStateToProps, null)(TechnologiesContainer);