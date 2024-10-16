import React from 'react';
import albumsPic from './images/albums.png';

function Albums() {
  return (
    <div id="albums">
      <img src={albumsPic} alt="Albums" style={{ width: '100%' }} />
    </div>
  );
}

export default Albums;

