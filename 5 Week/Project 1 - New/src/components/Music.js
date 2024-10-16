import React from 'react';
import MusicMenu from './MusicMenu';
import AllSongs from './AllSongs';
import Artists from './Artists';
import Albums from './Albums';

function Music({ musicMenuItems, activeItem }) {
  console.log("musicMenuItems", musicMenuItems);
  console.log("activeItem", activeItem);

  return (
    <div>
      {musicMenuItems[activeItem] === 'All Songs' ? <AllSongs /> :
        musicMenuItems[activeItem] === 'Artists' ? <Artists /> :
          <Albums />}
    </div>
  );
}

export default Music;
