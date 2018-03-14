// import * as SongActionTypes from '../actiontypes/songs';

export const actionTypes = {
  UPDATE_SONG_SCORE: 'UPDATE_SONG_SCORE',
  SELECT_SONG:'SELECT_SONG'
};

export const updateSongScore = (index, score)  => {
   return {
     type: actionTypes.UPDATE_SONG_SCORE,
     index,
     score
  };
};

export const selectSong = index => {
  return {
    type: actionTypes.SELECT_SONG,
    index
  };
};
