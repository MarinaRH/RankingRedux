import React from 'react'
import PropTypes from 'prop-types'
import left from '../lef.png'
import rigth from '../rigth.png'

const SongDetail = ({ selectedSong }) => {
  if(selectedSong){
    return (
      <div>
        <a><img className='left' src={left}/></a>
        <ul>
          <h2>{selectedSong.name}</h2>
          <li>
            <span>Autor: </span>
            {selectedSong.autor}
          </li>
        </ul>
        <a><img className='rigth' src={rigth}/></a>
      </div>
    );
  }
};

SongDetail.propTypes = {
  selectedSong: PropTypes.object
};

export default SongDetail;