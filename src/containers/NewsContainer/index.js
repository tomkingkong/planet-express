import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import './NewsSection.css';
import { NewsContent } from '../../components/NewsContent';

export const NewsContainer = ({ news }) => {
  const displayNews = news.map((info, i) => <NewsContent {...info} key={i}/>)
  return (
    <section className="news_container">
      <h1 className="news__section__title">Out of this world News!</h1>
      { displayNews }
    </section>
  )
}

NewsContainer.propTypes = {
  news: array
}

export const mapStateToProps = ({ news }) => ({ news });

export default connect(mapStateToProps, null)(NewsContainer);