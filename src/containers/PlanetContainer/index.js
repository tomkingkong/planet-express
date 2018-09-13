import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import './Destination.css';
import { Modal } from '../../components/Modal';
import { connect } from 'react-redux';
import { createJourney } from '../../thunks';

export class PlanetContainer extends Component {
  constructor() {
    super();
    this.state = {
      toggleConfirmModal: false
    }
  }
  
  handleClick = () => {
    this.setState({ toggleConfirmModal: true });
  }

  handleConfirm = (e) => {
    e.persist();
    e.stopPropagation();
    const { spaceEvents, history, planet, createJourney } = this.props;
    if ($(e.target).hasClass('confirm__no')) {
      this.setState({ toggleConfirmModal: false });
    } else {
      createJourney(spaceEvents, planet.name);
      history.replace('/journey');
    }
  }

  render() {
    const { name, hostStar, numInSystem, distance, image } = this.props.planet;
    const { toggleConfirmModal } = this.state;
    const planetImageStyle = { backgroundImage: `url(${image})` };
    return (
      <article onClick={this.handleClick} className="Destination">
        {toggleConfirmModal && <Modal handleConfirm={this.handleConfirm} />}
        <div className="planet__icon" style={planetImageStyle}></div> 
        <div className="destination__info">
          <h4 className="planet__title">{name}</h4>
          <p>{numInSystem} planet orbiting star {hostStar}.</p>
          <p>{distance} parsecs from Earth.</p>
        </div>      
      </article>
    );
  }
}

const { object, array, func } = PropTypes;
PlanetContainer.propTypes = {
  planet: object,
  history: object,
  spaceEvents: array,
  createJourney: func
}

export const mapStateToProps = ({ spaceEvents }) => ({ spaceEvents });
export const mapDispatchToProps = (dispatch) => ({
  createJourney: (events, id) => dispatch(createJourney(events, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);