
import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const Songs = props => (
  <div className="player">
    <div className="player-name"
      onClick={() => props.selectSong(props.index)}>
      {props.name}
    </div>
    <div className="player-score">
      <Counter
        index={props.index}
        updateSongScore={props.updateSongScore}
        autor={props.autor}
        score={props.score}
      />
    </div>
  </div>
);

Songs.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  updateSongScore: PropTypes.func.isRequired,
  selectSong: PropTypes.func.isRequired
};

export default Songs;