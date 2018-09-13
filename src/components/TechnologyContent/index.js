import React from 'react';
import PropTypes from 'prop-types';

import './Technology.css';

export const TechnologyContent = ({ 
  title, 
  benefits, 
  org, 
  description, 
  techAreas, 
  status }) => {
  let newTags = techAreas[0].split(',')
  const techTags = newTags
    .map((tag, i) => (<li className="tech__tag" key={tag+i}>{tag}</li>));
  // const benefitList = benefits
  //   .map((benefit, i) => <li key={benefit+i}>{benefit}</li>);
  return (
    <article className="Technology">
      <h4 className="tech__title">{title}</h4>
      <p className="tech__desc">{description}</p>
      {/* <ul className="benefits">{benefitList}</ul> */}
      <p className="tech__org">
        Organization: {org}
      </p>
      <p className="tech__status">
        Status: {status}
      </p>
      <ul className="tech__techTags">{techTags}</ul>
    </article>
  )
}

const { string, array } = PropTypes;
TechnologyContent.propTypes = {
  discoveryMethod: string, 
  description: string, 
  techAreas: array, 
  director: string, 
  benefits: array, 
  status: string,
  title: string, 
  org: string
};