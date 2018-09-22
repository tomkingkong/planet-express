import React from 'react';
import { string, array } from 'prop-types';

import './Technology.css';

export const TechnologyContent = ({ 
  org, 
  title, 
  status,
  techAreas, 
  description }) => {
  let newTags = techAreas[0].split(',');
  const techTags = newTags
    .map((tag, i) => (<li className="tech__tag" key={tag+i}>{tag}</li>));
  return (
    <article className="Technology">
      <h4 className="tech__title">{title}</h4>
      <p className="tech__desc">{description}</p>
      <div className="tech__body">
        <p className="tech__org">
          Organization: {org}
        </p>
        <p className="tech__status">
          Status: {status}
        </p>
      </div>
      <ul className="tech__techTags">{techTags}</ul>
    </article>
  );
};

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