import React from 'react';
import ChildComponent from './ChildComponent';
import { useState } from 'react';

const ParentComponent = () => {

  const [color, setColor] = useState('#000000');

  return (
    <div>
      <h1>Pick a Color</h1>
      <input type="color" value={color} onChange={(e) => { setColor(e.target.value) }} />
      <br />
      <ChildComponent color={color} />
    </div>
  );
}

export default ParentComponent;
