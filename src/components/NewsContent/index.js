import React from 'react';
import { string } from 'prop-types';

import './News.css';

export const NewsContent = ({
  description, 
  publishedAt, 
  urlToImage, 
  author, 
  title, 
  url }) => {
  const imageBackground = {'backgroundImage': `url(${urlToImage})`};
  return (
    <article className="news__article">
      <div className="news__img" style={imageBackground} />
      <div className="news__info">
        <h4 className="news__title">{title}</h4>
        <p className="news__desc">{description}</p>
        <p className="news__auth">Author: {author}</p>
        <a className="news__link" href={url} target="_blank">Link to Article</a>
        <p className="news__publish">{publishedAt}</p>
      </div>
    </article>
  )
}

NewsContent.propTypes = {
  description: string, 
  publishedAt: string, 
  urlToImage: string, 
  author: string, 
  title: string, 
  url: string
} 