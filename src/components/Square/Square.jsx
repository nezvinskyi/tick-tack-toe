import PropTypes from 'prop-types';
import React from 'react';

const Square = props => {
  return (
    <button type="button" className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
};

export default Square;
