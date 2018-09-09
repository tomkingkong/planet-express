import React from 'react';
import PropTypes from 'prop-types';

export const NewsContent = ({
  description, 
  publishedAt, 
  urlToImage, 
  author, 
  title, 
  url }) => {
  return (
    <article className="news">
     <img src={urlToImage} alt={title}/>
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{author}</p>
      <a href={url} target="_blank">Link to Article</a>
      <p>{publishedAt}</p>
    </article>
  )
}

NewsContent.propTypes = {
  news: PropTypes.object
}