import React from 'react';
import thumbnail from './images/thumbnail.jpg';
import song from './songs/TroyBoiAfterhours.mp3';

function AllSongs() {
  return (
    <div id="allSongs">
      <div className="thumbnail">
        <img src={thumbnail} alt="thumbnail" style={{ height: "100%", width: "100%" }} />
        <div className="song-details">
          <span>Afterhours</span>
          <small>TroyBoi</small>
        </div>
      </div>
      <audio src={song} controls autoPlay />
    </div>
  );
}

export default AllSongs;
