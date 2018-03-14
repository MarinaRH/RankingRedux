import { actionTypes } from '../actions/songs';

const initialState = {
	songs: [{
		name: 'aaaaaaaa',
		autor: 'aaaaaaaaaaaaaaaaaaaaa',
	  score: 31
	},
	{
		name: 'bbbb',
		autor: 'bbbbbbbbbbbbbbbbbbbbbbbbbb',
	  score: 30
	},
	{
		name: 'ccccc',
		autor: 'cccccccccccccccccccccccccc',
	  score: 27
	},
	{
		name: 'dddd',
		autor: ' dddddddddddddddddddddddd',
	  score: 25
	},
	{
		name: 'eeeee',
		autor: ' eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
	  score: 19
	}
	],
	selectedSongIndex: 3
}

export default function Player(state=initialState, action) {

  switch(action.type){
    case actionTypes.UPDATE_SONG_SCORE: {
			const updateSongList = state.songs.map((song, index) => {
        if(index === action.index){
          return {
            ...song,
             score: song.score + action.score
           };
        }
        return song;
      });
			return {
				...state,
				songs: updateSongList
			};
		}

	  case actionTypes.SELECT_SONG:
		  return {
				...state,
				selectedSongIndex: action.index
			};

    default:
      return state;
  }
}


