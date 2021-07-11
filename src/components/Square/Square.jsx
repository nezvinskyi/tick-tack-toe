import React from 'react';

const Square = props => {
  <button type="button" className="square" onClick={props.onClick()}>
    {props.value}
  </button>;
};

export default Square;
