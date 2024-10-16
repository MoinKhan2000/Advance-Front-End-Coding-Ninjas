import React from 'react';
import coverflowPic from './images/coverflow.png';

function Coverflow() {
  return (
    <div id="coverflow">
      <img src={coverflowPic} alt="Coverflow" style={{ width: '100%' }} />
    </div>
  );
}

export default Coverflow;
