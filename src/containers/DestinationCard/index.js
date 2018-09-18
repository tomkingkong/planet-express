import React, { Component } from 'react';
import { object, array, func, string, number } from 'prop-types';
import $ from 'jquery';

import './Destination.css';
import { Modal } from '../../components/Modal';
import { connect } from 'react-redux';
import { createJourney } from '../../thunks';
import { PlanetIcon } from '../../components/Icons';

export class DestinationCard extends Component {
  constructor() {
    super();
    this.state = {
      toggleConfirmModal: false
    };
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
    const { name, distance, image } = this.props.planet;
    const { toggleConfirmModal } = this.state;
    return (
      <article onClick={this.handleClick} className="Destination">
        {toggleConfirmModal && <Modal handleConfirm={this.handleConfirm} />}
        <div className="planet__icon">
          <PlanetIcon planetMap={image} />
        </div>
        <div className="destination__info">
          <h4 className="planet__title">{name}</h4>
          <p>{distance} parsecs from Earth.</p>
          <h5>Start your trip!</h5>
        </div>      
      </article>
    );
  }
}

DestinationCard.propTypes = {
  createJourney: func,
  spaceEvents: array,
  distance: number, 
  history: object,
  planet: object,
  image: string,
  name: string
};

export const mapStateToProps = ({ spaceEvents }) => ({ spaceEvents });
export const mapDispatchToProps = (dispatch) => ({
  createJourney: (events, id) => dispatch(createJourney(events, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DestinationCard);