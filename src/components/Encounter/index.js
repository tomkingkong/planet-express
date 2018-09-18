import React, { Component } from 'react';
import { string, array } from 'prop-types';

import './Encounter.css';

export default class Encounter extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
    }
  }
  handleClick = () => {
    this.setState({ showInfo:!this.state.showInfo })
  }
  
  displayInfo = () => {
    const { name, description } = this.props;
    return (
      <div className="encounter__info">
        <h4 className="encounter__title">{name}</h4>
        <p className="encounter__desc">{description}</p>
      </div>
    )
  }
  
  render() {
    const encounterImgStyle = {
      backgroundImage: `url(${this.props.image_files[2].file_url})`
    }
    return (
      <article className="Encounter"  >
        <div className="encounter__img" style={encounterImgStyle} onClick={this.handleClick}/>
        { this.state.showInfo && this.displayInfo() }
      </article>
    )
  }
}

Encounter.propTypes = {
  name: string,
  description: string,
  images_files: array
}