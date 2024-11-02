import React from 'react';
import ChildComponent from './ChildComponent';
import { useState } from 'react';
import colorContext from '../context';

const ParentComponent = () => {
  console.log(colorContext);
  const [color, setColor] = useState('#000000');
  return (
    <colorContext.Provider value={{ color }}>
      <div>
        <h1>Pick a Color</h1>
        <input type="color" value={color} onChange={(e) => { setColor(e.target.value) }} />
        <br />
        <ChildComponent />
      </div>
    </colorContext.Provider>
  );
}

export default ParentComponent;
