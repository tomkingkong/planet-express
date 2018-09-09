import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { NewsContent } from '../../components/NewsContent';

export const NewsContainer = ({ news }) => {
  const displayNews = news.map((info, i) => <NewsContent {...info} key={i}/>)
  return (
    <section className="news_container">
      { displayNews }
    </section>
  )
}

NewsContainer.propTypes = {
  news: PropTypes.array
}

export const mapStateToProps = ({ news }) => ({ news });

export default connect(mapStateToProps, null)(NewsContainer);