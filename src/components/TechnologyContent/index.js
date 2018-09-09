import React from 'react';
import PropTypes from 'prop-types';

export const TechnologyContent = ({ 
  title, 
  discoveryMethod, 
  benefits, 
  org, 
  director, 
  description, 
  techAreas, 
  status }) => {
    const techTags = techAreas.map((tag, i) => <li key={tag+i}>{tag}</li>);
    // const benefitList = benefits.map((benefit, i) => <li key={benefit+i}>{benefit}</li>);
  return (
    <article className="technology">
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{discoveryMethod}</p>
      <p>{status}</p>
      {/* <ul className="benefits">{benefitList}</ul> */}
      <p>{org}</p>
      <p>{director}</p>
      <ul className="techTags">{techTags}</ul>
    </article>
  )
}

TechnologyContent.propTypes = {
  data: PropTypes.array
}