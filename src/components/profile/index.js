import React from 'react';

export const profile = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.goBack()}>Back</button>
    </div>
  )
}