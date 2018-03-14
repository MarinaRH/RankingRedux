
import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => (
  <div className="counter" >
    <button
      className="counter-action decrement"
      onClick={() => props.updateSongScore(props.index, -1)}>
      -
    </button>
    <div className="counter-score"> {props.score} </div>
    <button
      className="counter-action increment"
      onClick={() => props.updateSongScore(props.index, 1)}>
      +
    </button>
  </div>);

  Counter.propTypes = {
      updateSongScore: PropTypes.func.isRequired,
      index: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired
  };

export default Counter;
