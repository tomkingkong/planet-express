import React from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';

import { handleScroll } from '../../utilities/ScrollAnimate'
import './NewsSection.css';
import { NewsContent } from '../../components/NewsContent';

export const NewsContainer = ({ news }) => {
  const displayNews = news.map((info, i) => <NewsContent {...info} key={i}/>);
  handleScroll('.news_container', '.news__section__title');
  return (
    <section className="news_container">
      <h1 className="news__section__title">SpaceNews</h1>
      { displayNews }
    </section>
  );
};

NewsContainer.propTypes = {
  news: array
};

export const mapStateToProps = ({ news }) => ({ news });

export default connect(mapStateToProps, null)(NewsContainer);