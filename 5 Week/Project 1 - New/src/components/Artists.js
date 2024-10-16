import React from 'react';
import artistsPic from './images/artists.jpg';

function Artists() {
  return (
    <div id="artists">
      <img src={artistsPic} alt="Artists" style={{ width: '100%' }} />
    </div>
  );
}

export default Artists;
