import React from 'react';

export const Shuttle = ({ history }) => {
  return (
    <div>
      <p>some text n shit</p>
      <button onClick={() => history.replace('/ISS')}>Continue ></button>
    </div>
  )
}

