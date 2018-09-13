import React from 'react';
import PropTypes from 'prop-types';

export const profile = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  )
}


const { object } = PropTypes;
profile.propTypes = {
  history: object
} 