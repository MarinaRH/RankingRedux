import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/songs';
import Songs from '../components/Songs';
import SongDetail from '../components/SongDetail';

class Scoresong extends Component {
    
  static propTypes = {
    songs: PropTypes.array.isRequired
  };

  render() {
    
    const { dispatch, songs, selectedSongIndex } = this.props;
    const updateSongScore = bindActionCreators(PlayerActionCreators.updateSongScore, dispatch);
    const selectSong = bindActionCreators(PlayerActionCreators.selectSong, dispatch);

    let selectedSong;
    if(selectedSongIndex !== -1){
      selectedSong = songs[selectedSongIndex];
    }
    
    const songComponents = songs.map((songs, index) => (
      <Songs
        index={index}
        name={songs.name}
        score={songs.score}
        key={songs.name}
        updateSongScore={updateSongScore}
        selectSong={selectSong}
      />
    ));
    return (
      <div>
        <h1 className="center">Ranking Song</h1>
      <div className="scoreboard">
        <div className="player-detail">
          <SongDetail selectedSong={selectedSong} />
        </div>
        <div className="players">
          { songComponents }
        </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    songs: state.songs,
    selectedSongIndex: state.selectedSongIndex
  }
);

export default connect(mapStateToProps)(Scoresong);
