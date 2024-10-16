import React from 'react';
import gamesPic from './images/games.jpg';

function Games() {
  return (
    <div id="games">
      <img src={gamesPic} alt="Games" style={{ width: '100%' }} />
    </div>
  );
}

export default Games;
